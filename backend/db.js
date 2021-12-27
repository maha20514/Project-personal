const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/TodoList_personalV01'

mongoose.connect(dbURI);

//Extra 
const db = mongoose.connection;

db.on('error', (err)=>{
    if(err)
    {
        console.log(err.message + "Error in connection... ")
    }
});

db.on('connected' , (err)=>{
    console.log("Mongo is connected")
})