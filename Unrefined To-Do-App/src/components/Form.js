import React from "react";

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
  //Function that updates the state with the [input]
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  //Function that updates the state with the [to do list item]
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
  };
  //Function that updates the state for category filter
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  //Form
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
