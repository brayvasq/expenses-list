const Expense = require('../models/expense.model');
/**
 * Función de prueba para verificar funcionamiento de la API
 * @param req petición que se realizó
 * @param res objeto de respuesta
 */
exports.test = (req,res) => {
    res.send({message:'Test controller'});
};

/**
 * Función que obtiene todos los gastos
 * @param req petición que se realizó
 * @param res objeto de respuesta
 */
exports.index = (req,res) =>{
    Expense.find({},(err,expenses)=>{
        if(err) return err
        res.send(expenses);
    })
};

/**
 * Función que crea un gasto, Devuelve un mensaje éxito en caso de que
 * se haya creado el recurso en la base de datos
 * @param req petición que se realizó
 * @param res objeto de respuesta
 */
exports.create = (req,res) =>{
    let expense = new Expense({
       item: req.body.item,
       price: req.body.price
    });

    console.log(expense);
    expense.save((err)=>{
        if(err) return err;
        console.log(err);
        res.send({message:'Expense created!'});
    });
};
/**
 * Función que obtiene los detalles de un gasto en específico
 * @param req petición que se realizó
 * @param res objeto de respuesta
 */
exports.details = (req,res) => {
    Expense.findById(req.params.id,(err,expense)=>{
        if(err) return err;
        res.send(expense);
    });
};

/**
 * Función que actualiza los datos de un gasto específico
 * @param req petición que se realizó
 * @param res objeto de respuesta
 */
exports.update = (req,res) => {
  Expense.findByIdAndUpdate(req.params.id,{$set: req.body},(err,expense)=>{
     if(err) return err;
     res.send({message:'Expense updated'});
  });
};

/**
 * Función que elimina un recurso de la base de datos
 * @param req petición que se realizó
 * @param res objeto de respuesta
 */
exports.delete = (req,res) => {
  Expense.findByIdAndRemove(req.params.id, (err) => {
     if(err) return err;
     res.send({message:'Expense deleted'});
  });
};