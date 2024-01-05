const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
app.use(express.json());

const port = 8000;

app.get("/todo", (req, res) => { 

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Sent the wrong Inputs"
        })
        return;
    }

    res.send("Hello")
})

app.post("/todos", (req, res) => { 
    res.send("Hello")
})

app.put("/completed", (req, res) => {
    
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Sent the wrong Inputs"
        })
        return;
    }
    
    res.send("Hello")
})

app.listen(port , () =>  {
    console.log("the server is running on the port" + port)
})