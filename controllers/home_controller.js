const db = require('../config/mongoose');
const Todo = require('../models/todo');


module.exports.home = function(req, res ){
    Todo.find({}, function(err, contacts){
        if(err){
            console.log('error in fetching contacts from db');
            return;
        }
        return res.render('home.ejs',{
            title: "TODO",
            todo_list: contacts
        });
    });
   
}