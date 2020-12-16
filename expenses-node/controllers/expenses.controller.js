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

const show = (request, response) => {
  Expense.findById(request.params.id, (error, expense) => {
    if (error) return error;

    response.send(expense);
  });
}

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

const remove = (request, response) => {
  Expense.findByIdAndRemove(
    request.params.id,
    (error) => {
      if(error) return error;

      response.send({ message: 'Expense deleted' });
    }
  );
}

module.exports = { index, create, show, update, remove }
