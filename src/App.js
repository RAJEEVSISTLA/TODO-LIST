import './App.css';
import Header from "./comp/Header"
import { Todos } from "./comp/Todos"
import { Footer } from "./comp/Footer"
import React, { useState } from 'react';
import { AddTodo } from './comp/AddTodo';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) { 
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos", JSON.stringify([...todos, myTodo]));
  }

  const [todos, setTodos] = useState(initTodo);
  return (
    <>
      <Header title="Todolist" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}
export default App;
