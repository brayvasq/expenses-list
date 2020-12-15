const { Expense } = require('../models/expense.model')

const index = (request, response) => {
  Expense.find({}, (error, expenses) => {
    if(error) return error;

    response.send(expenses);
  });
}

module.exports = {index}
