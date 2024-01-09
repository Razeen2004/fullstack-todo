import './App.css';
import Todo from './components/Todos';
import CreateTodo from './components/CreateTodo';
import { useState, useEffect } from 'react';
import { useRef } from "react";
import { motion } from "framer-motion";
function App() {

  let [todo, setTodo] = useState([]);
  const constraintsRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:8000/todos")
      .then((response) => {
        response.json((finaldata) => {
          setTodo(finaldata)
        })
      })
  }, [todo]);

  return (
    <motion.div ref={constraintsRef} className='body'>
      <CreateTodo constraintsRef={constraintsRef} />
      <Todo constraintsRef={constraintsRef} todos={todo} />
    </motion.div>
  );
}

export default App;
