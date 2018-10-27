const express = require('express');
const router = express.Router();

const expense_controller = require('../controllers/expense.controller');

router.get('/test',expense_controller.test);

router.get('/',expense_controller.index);
router.get('/:id',expense_controller.details);
router.post('/create',expense_controller.create);
router.put('/:id/update',expense_controller.update);
router.delete('/:id/delete',expense_controller.delete);


module.exports = router;