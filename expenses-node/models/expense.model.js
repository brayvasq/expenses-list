const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ExpenseSchema = new Schema({
    item: {type:String,required: true, max: 100},
    price: {type:Number,required: true}
});

module.exports = mongoose.model('Expense',ExpenseSchema);