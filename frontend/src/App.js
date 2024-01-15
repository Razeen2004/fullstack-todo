import './App.css';
// import Todo from './components/Todos';
import CreateTodo from './components/CreateTodo';
import { useState, useEffect, useMemo } from 'react';
import { useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios"
function App() {
// add todos app
  const [inputValue, SetInputValue] = useState(1);
  const [counter, SetCounter] = useState(0)

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue])
  
  return (
    <>
      <input value={inputValue} onChange={(e) => { SetInputValue(e.target.value) }} placeholder='Try the Sum' /><br/>
      <h2>The Sum of {inputValue} is {count}</h2>
      <button onClick={()=>{SetCounter(counter + 1)}}>Counter is {counter}</button>
    </>
  );
}


export default App;
