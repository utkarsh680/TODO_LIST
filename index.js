const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Todo = require('./models/todo');

const app = express();

//for express router
app.use('/', require('./routes'));

//set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})

