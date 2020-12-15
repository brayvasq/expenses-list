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
