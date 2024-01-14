import './App.css';
// import Todo from './components/Todos';
import CreateTodo from './components/CreateTodo';
import { useState, useEffect } from 'react';
import { useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios"
function App() {
  const constraintsRef = useRef(null);

  const [id,setId] = useState("1")

  return (
    <>
      <button onClick={()=>{setId(1)}} >1</button>
      <button onClick={()=>{setId(2)}} >2</button>
      <button onClick={()=>{setId(3)}} >3</button>
      <button onClick={()=>{setId(4)}} >4</button>
      <Todo id={id} />
    </>
    // <motion.div ref={constraintsRef} className='body'>
    //   <CreateTodo constraintsRef={constraintsRef} />
    //   <Todo constraintsRef={constraintsRef} todos={todo} />
    // </motion.div>
  );
}

  function Todo({ id }) {
    
  let [todo, setTodo] = useState([]);

    useEffect(() => {
      axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
        .then((response) => {
          setTodo(response.data.todo)
        })
    }, [id])

    return (
      <>
        <h2>
          {todo.title}
        </h2>
      </>
    )
  }

export default App;
