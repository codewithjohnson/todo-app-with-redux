import { useState } from "react";
import "./inputBox.css";
import { todoTags } from "../../utilities/todoTags";

const InputBox = () => {
  const [todoTag, setTodoTag] = useState("personal");
  const HandleTagChange = (e) => {
    setTodoTag(e.target.value);
  };

  return (
    <div className="inputContainer">
      <input type="text" placeholder="Enter your task here..." />
      <select
        name="todoTags"
        id="todoTags"
        value={todoTag}
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
