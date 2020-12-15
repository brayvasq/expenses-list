const { Expense } = require('../models/expense.model')

const index = (request, response) => {
  Expense.find({}, (error, expenses) => {
    if (error) return error;

    response.send(expenses);
  });
}

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
