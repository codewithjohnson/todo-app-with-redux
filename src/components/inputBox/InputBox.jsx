import { useState } from "react";
import "./inputBox.css";
import { todoTags } from "../../utilities/todoTags";


const InputBox = ({
  input,
  HandleInputChange,
  HandleTagChange,
  handleAddTodo,
}) => {
  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="Enter your task here..."
        value={input.inputValue}
        onChange={HandleInputChange}
        onKeyDown={handleAddTodo}
      />
      <select
        name="todoTags"
        id="todoTags"
        value={input.inputTag}
        onChange={HandleTagChange}
      >
        {todoTags.map((todoTag, index) => {
          return (
            <option key={index} value={todoTag.value}>
              {todoTag.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputBox;
