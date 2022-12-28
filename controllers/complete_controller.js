const db = require('../config/mongoose');
const Todo = require('../models/todo');

module.exports.complete = function(req,res){

    let id = req.query.id;
 
    // find the contact in database using id and delete

    Todo.findByIdAndUpdate(id, {
        isCompleted: true
    }, function(error, data) {
        if (error) {
            console.log("error in updating*********");
            return;
        }

        return res.redirect('back');
    });

}