import React, { useState } from 'react'
import './CreateTodos.css'
import { FaFileAlt } from "react-icons/fa";
import { useRef } from "react";
import { motion } from "framer-motion";
const CreateTodo = ({ constraintsRef }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const ButtonOnClick = async (e) => {
        e.preventDefault();

        fetch("http://localhost:8000/todo", {
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
            res.json((response) => {
                response.status(200).json({
                    Todo: "Todo Added"
                })
            })
        })
    }
    
    console.log(title, description)
    return (
        <motion.div whileDrag={{scale: 1.1}} drag dragConstraints={constraintsRef} className='todo'>
            <FaFileAlt />
            <div className="todo-content">
                <input type="text" placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} />
                <textarea type="text" placeholder='Description' onChange={(e) => { setDescription(e.target.value) }} />
                <button onClick={ButtonOnClick}>
                    Add a Todo
                </button>
            </div>
        </motion.div>
    )
}

export default CreateTodo