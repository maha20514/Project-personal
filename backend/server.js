const express = require('express');
const req = require('express/lib/request');
const app = express();

const db = require('./db');
const Todo = require('./todo');

app.use(express.json());

app.get('/', (req, res)=>{
    console.log("GET / is working")
})

app.get('/task', (req, res)=>{
    Todo.find({}, (err, data)=>{
        if(err)
        {
            console.log("ERROR: ", err)
        }else
        {
            res.json(data);
        }
    })
    res.json('GET / is  working')

})

app.post('/task', (req, res)=>{
    Todo.create(req.body, (err, newTask)=>{
        console.log('25: ', req.body)
        if(err)
        {
            console.log("ERROR: ", err)
        }else
        {
            res.status(201).json(newTask);
        }
    })
})
app.listen(5000, ()=>{
    console.log("SERVER IS WORKING...")
})