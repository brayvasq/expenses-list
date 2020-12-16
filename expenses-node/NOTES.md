# API
NodeJS express project to expose an expenses simple API.

## Setup project
Creating project.
```bash
# Creating folder
mkdir expenses-node/
# Move to the folder
cd expenses-node/
```

Initialize nodejs project
```bash
npm init
```

Install dependencies
```bash
# Project dependencies
npm install express body-parser mongoose dotenv --save

# Linter
npm i eslint -D
```

## Basic server
Create the entry point file
```bash
touch index.js
```

Create a basic express server
```javascript
// index.js
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Listen on port ${port}`)
})
```

## Create the project structure
```bash
# Create a folder for routes
mkdir routes

# Create a folder for controllers
mkdir controllers

# Create a folder for models
mkdir models

# Create a folder for middlewares
mkdir middlewares
```

## Create test endpoint
Create a test controller file
```bash
touch controllers/test.controller.js
```

Create a test controller
```javascript
// controllers/test.controller.js
const index = (request, response) => {
  response.send({ message: 'Test controller' })
}

module.exports = { index: index }
```

Create a route file
```bash
touch routes/test.route.js
```

Create a test route
```javascript
// routes/test.route.js
const express = require('express')
const router = express.Router()
const testController = require('../controllers/test.controller')

router.get('/test', testController.index)

module.exports = router
```

Import the routes to the main file.
```javascript
// index.js
const test = require('./routes/test.route')

// ....
// Routes
app.use('/', test)
```

Now you can visit http://localhost:5000/test

## Connect to the MongoDB
Use the m manager to use a DB. https://github.com/aheckmann/m
```bash
# Install a MongoDB version
m stable

# Create a directory for data
mkdir ~/MongoData

# Run the mongodb service
m use <version> --port 27017 --dbpath ~/MongoData
```

Import the modules and stablish a connection
```javascript
// index.js
// ...
const mongoose = require('mongoose')

// ...
const dbUrl = process.env.MONGODB_URI

// Connection
mongoose.connect(dbUrl, { useNewUrlParser: true })
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
```

## Building the API
Create a controller file.
```bash
touch controllers/expenses.controller.js
```

Create a route file
```bash
touch routes/expenses.route.js
```

Import router module
```javascript
// routes/expense.route.js
const express = require('express')
const router = express.Router()
```

### Creating the Model
Create a model file
```bash
touch models/expense.model.js
```

Create the schema.
```javascript
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
    item: {
        type: String,
        required: true,
        max: 100
    },
    price: {
        type: Number, 
        required: true
    }
})

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = { Expense }
```

### Get all the expenses
Create the controller action
```javascript
// controllers/expense.controller.js
const { Expense } = require('../models/expense.model')

const index = (request, response) => {
  Expense.find({}, (error, expenses) => {
    if(error) return error;

    response.send(expenses);
  });
}

module.exports = { index }
```

Add the route
```javascript
// routes/expense.route.js
// ...
const expensesController = require('../controllers/expenses.controller')

router.get('/', expensesController.index);

module.exports = router
```

Setup the routes into the main file
```javascript
// ....
const expenses = require('./routes/expenses.route')

// ....
// Routes
app.use('/expenses', expenses)
```

### Configure bodyParser
To parse the body of POST actions we need to configura bodyParser.
```javascript
// index.js
// ...
const bodyParser = require('body-parser');

// ...
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
```

### Creating an expense
Create the controller action
```javascript
// controllers/expense.controller.js
// ....
const create = (request, response) => {
  let expense = new Expense({
    item: request.body.item,
    price: request.body.price
  });

  expense.save(error => {
    if (error) return error;

    response.send({ message: 'Expense created!' })
  });
}

module.exports = { index, create }
```

Add the route
```javascript
// routes/expense.route.js
// ...
router.post('/', expensesController.create);
```

### Get a single expense
Create the controller action
```javascript
// controllers/expense.controller.js
// ....
const show = (request, response) => {
  Expense.findById(request.params.id, (error, expense) => {
    if (error) return error;

    response.send(expense);
  });
}

module.exports = { index, create, show }
```

Add the route
```javascript
// routes/expense.route.js
// ...
router.get('/:id', expensesController.show);
```

### Update an expense
Create the controller action
```javascript
// controllers/expense.controller.js
// ....
const update = (request, response) => {
  Expense.findByIdAndUpdate(
    request.params.id,
    { $set: request.body },
    (error, expense) => {
      if(error) return error;

      response.send({ message: 'Expense updated' });
    }
  );
}

module.exports = { index, create, show, update }
```

Add the route
```javascript
// routes/expense.route.js
// ...
router.put('/:id', expensesController.update);
```
