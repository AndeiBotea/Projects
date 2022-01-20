//library imports
import React, { useState, useEffect } from "react";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

//Main Component
function App() {
  //State for the input
  const [inputText, setInputText] = useState("");
  //State for the to do items list
  const [todos, setTodos] = useState([]);
  //States for the filters
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONLY ONCE at the start of the app
  useEffect(() => {
    getLocalTodos();
  }, []);

  //Use EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed == true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed == false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Save to LocalStorage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  //Main App Render
  return (
    <div className="App">
      <header>
        <h1>Andrei's To Do List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      ></Form>
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      ></TodoList>
    </div>
  );
}

export default App;
