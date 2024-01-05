import './App.css';
import Todo from './components/Todos';
import CreateTodo from './components/CreateTodo';
import { useState, useEffect } from 'react';
import { useRef } from "react";
import { motion } from "framer-motion";

function App() {

  let [todo, setTodo] = useState([]);
  const constraintsRef = useRef(null);
  // async function Todos(){

  //   let data = await fetch("http://localhost:8000/todos")
  //   let todo = await data.json();
  //   setTodo(todo);
  // }
  // Todos()
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        let data = await fetch("http://localhost:8000/todos");
        let todos = await data.json();
        setTodo(todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [todo]);

  return (
    <motion.div ref={constraintsRef} className='body'>
        <CreateTodo constraintsRef={constraintsRef} />
        <Todo constraintsRef={constraintsRef} todos={todo} />
    </motion.div>
  );
}

export default App;
