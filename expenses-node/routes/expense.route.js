const express = require('express')
const router = express.Router()
const expenseController = require('../controllers/expense.controller')

router.get('/', expenseController.index);

module.exports = router
