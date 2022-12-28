
const db = require('../config/mongoose');
const Todo = require('../models/todo');

module.exports.add = function(req, res ){

    console.log(req.body);
    Todo.create({

        name: req.body.name,
        category: req.body.category,
        date: req.body.date,
        isCompleted: false,
    }, function(err, newTodo){
        if(err){console.log('Error in creating a contact!')
            return;}
            console.log('******', newTodo);
            return res.redirect('back');
    });
  
}