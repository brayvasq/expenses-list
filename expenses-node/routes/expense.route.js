const express = require('express');
const router = express.Router();
const expense_controller = require('../controllers/expense.controller');

router.get('/test',expense_controller.test);  // Ruta de pruebas
router.get('/',expense_controller.index); // Ruta para obtener todos los gastos
router.get('/:id',expense_controller.details); // Ruta para obtener un solo gasto
router.post('/create',expense_controller.create); // Ruta para crear gastos
router.put('/:id/update',expense_controller.update); // Ruta para actualizar los datos de un gasto
router.delete('/:id/delete',expense_controller.delete); // Ruta para eliminar un gasto

module.exports = router;