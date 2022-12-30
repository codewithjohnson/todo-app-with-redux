import { memo, useEffect } from "react";
import "./todoList.css";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { store } from "../../store";


const TodoList = () => {
  const TODOS = useSelector((store) => store.todos);

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

const MemoizedTodoList = memo(TodoList);

export default MemoizedTodoList;
