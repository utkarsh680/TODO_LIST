const db = require('../config/mongoose');
const Todo = require('../models/todo');

module.exports.delete = function(req,res){

    let id = req.query.id;
 
    // find the contact in database using id and delete

    Todo.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting an object from database');
            return;
        }
        
    return res.redirect('back');
    });

}