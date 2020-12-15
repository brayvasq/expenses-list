require('dotenv').config()

const express = require('express')

const test = require('./routes/test.route')
const app = express()

const port = process.env.PORT || 4000

// Routes
app.use('/', test)

app.listen(port, () => {
  console.log(`Listen on port ${port}`)
})
