import React, { useEffect } from 'react'
import { FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import './Todos.css'


const Todos = ({ todos, constraintsRef }) => {

    return (
        todos.map(todo => {
            return <motion.div whileDrag={{scale: 1.1}} drag dragConstraints={constraintsRef} className='todo'>
                <FaFileAlt />
                <div className="todo-content">
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                    <button className='mark-todo' >Mark as Complete</button>
                </div>
            </motion.div>
        })

    )
}

export default Todos