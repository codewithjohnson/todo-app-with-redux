import React from "react";
import PropTypes from "prop-types";
import "./todo.css";
import { todoTagsBgColor } from "../../utilities/todosTagColor";

const Todo = ({ todo }) => {
  return (
    <li key={todo.id} className="todo">
      <div className="todo__details">
        <input type="checkbox" name="" id="" />
        <div className="text__tag">
          <div className="todo__text">{todo.todo}</div>
          <div
            className="todo__tags"
            style={{
              backgroundColor: todoTagsBgColor[todo.tag],
            }}
          >
            {todo.tag}
          </div>
        </div>
      </div>
      <div className="todo_utils">
        <span className="material-symbols-outlined">delete</span>
        <span className="material-symbols-outlined">edit_note</span>
      </div>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.object,
};

export default Todo;
