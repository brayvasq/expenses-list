const Expense = require('../models/expense.model');
exports.test = (req,res) => {
    res.send('Test controller');
};

exports.index = (req,res) =>{
    Expense.find({},(err,expenses)=>{
        if(err) return err
        res.send(expenses);
    })
};

exports.create = (req,res) =>{
    let expense = new Expense({
       item: req.body.item,
       price: req.body.price
    });

    console.log(expense);

    expense.save((err)=>{
        if(err) return err;
        console.log(err);
        res.send('Expense created!');
    });
};

exports.details = (req,res) => {
    Expense.findById(req.params.id,(err,expense)=>{
        if(err) return err;
        res.send(expense);
    });
};

exports.update = (req,res) => {
  Expense.findByIdAndUpdate(req.params.id,{$set: req.body},(err,expense)=>{
     if(err) return err;
     res.send('Expense updated');
  });
};

exports.delete = (req,res) => {
  Expense.findByIdAndRemove(req.params.id, (err) => {
     if(err) return err;
     res.send('Expense deleted');
  });
};