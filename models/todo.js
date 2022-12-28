const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date:{
        type:String,
        require:true
    },
    isCompleted: {
        type:Boolean
    }
    
})


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;