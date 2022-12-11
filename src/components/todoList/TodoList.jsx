import React from "react";
import "./todoList.css";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const TODOS = useSelector((store) => store.todos.todos);
  console.log(TODOS);

  return (
    <div className="todoList">
      <ul>
        {TODOS.map((todo, index) => {
          return <Todo todo={todo} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
