require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const test = require('./routes/test.route')
const app = express()

const port = process.env.PORT || 4000
const dbUrl = process.env.MONGODB_URI

// Connection
mongoose.connect(dbUrl, {useNewUrlParser: true})
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Routes
app.use('/', test)

app.listen(port, () => {
  console.log(`Listen on port ${port}`)
})
