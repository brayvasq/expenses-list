const express = require('express')
const router = express.Router()
const expensesController = require('../controllers/expenses.controller')

router.get('/', expensesController.index);
router.post('/', expensesController.create);
router.get('/:id', expensesController.show);
router.put('/:id', expensesController.update);
router.delete('/:id', expensesController.remove);

module.exports = router
