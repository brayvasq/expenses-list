const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const expense = require('./routes/expense.route');
const app = express();

let port = 3000;
let dev_db_url = 'mongodb://localhost:27017/expenses';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/expenses',expense);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})