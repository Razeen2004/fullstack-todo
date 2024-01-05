const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());

const Todo = require('./db');
const { createTodo, updateTodo } = require('./types');

const port = 8000;


app.use(express.json());


app.post("/todo", async (req, res) => { 

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Sent the wrong Inputs"
        })
        return;
    }
    
    let todos = await Todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        isCompleted: parsedPayload.data.isCompleted,
    })

    todos.save();
    res.status(200).json({
        msg: "Success your todo is Added",
    })
})

app.get("/todos", async (req, res) => { 
    
    let todos = await Todo.find()
    console.log(todos)
    res.send(todos)
})

app.put("/completed", async (req, res) => {
    
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Sent the wrong Inputs"
        })
        return;
    }

    await Todo.updateOne({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        isCompleted: parsedPayload.data.isCompleted,
    })
    
    res.send("Hello")
})

app.listen(port , () =>  {
    console.log("the server is running on the port" + port)
})