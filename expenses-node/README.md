# Expenses API
NodeJS express project to expose an expenses simple API.
**NOTE:** If you want to know how I built the API, check the file `NOTES.md`

## Run
Install dependencies
```bash
npm install
```

Setup the environment variables in the `.env` file. i.e:
```bash
PORT=5040
MONGODB_URI='mongodb://localhost:27017/expenses'
```

Execute the node project
```bash
node index.js
```

## Project structure
```bash
.
├── controllers
│   ├── expenses.controller.js
│   └── test.controller.js
├── index.js
├── middlewares
│   └── cors.middleware.js
├── models
│   └── expense.model.js
├── NOTES.md
├── package.json
├── package-lock.json
├── postman
│   └── expenses.json
├── README.md
└── routes
    ├── expenses.route.js
    └── test.route.js
```
