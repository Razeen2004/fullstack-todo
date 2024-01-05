import React, { useState } from 'react'

const CreateTodo = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const ButtonOnClick = async (e) => {
        e.preventDefault();

        fetch("http://localhost:8000/todo",{
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
                isCompleted: false,
            }),
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => {
            res.json((response)=>{
                response.status(200).json({
                    Todo: "Todo Added"
                })
            })
        })

    }
    console.log(title,description)
    return (
        <>
            <input type="text" placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} /> <br />
            <input type="text" placeholder='Description' onChange={(e) => { setDescription(e.target.value) }} /><br />
            <button onClick={ButtonOnClick}>
                Add a Todo
            </button>
        </>
    )
}

export default CreateTodo