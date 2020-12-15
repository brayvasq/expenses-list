const express = require('express')
const router = express.Router()
const expensesController = require('../controllers/expenses.controller')

router.get('/', expensesController.index);
router.post('/', expensesController.create);
router.get('/:id', expensesController.show);

module.exports = router
