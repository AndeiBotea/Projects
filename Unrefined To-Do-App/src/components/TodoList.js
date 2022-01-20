import React from "react";
//Import components
import Todo from "./Todo";

//The component that will update the UI with the to do items
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              text={todo.text}
              setTodos={setTodos}
              todos={todos}
            ></Todo>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
