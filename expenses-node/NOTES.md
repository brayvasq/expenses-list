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
npm install express body-parser mongoose dotenv --save
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
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
```
