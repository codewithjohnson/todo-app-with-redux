import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import MemoizedHeader from "./components/header/Header";
import InputBox from "./components/inputBox/InputBox";
import MemoizedFooter from "./components/footer/Footer";
import MemoizedTodoList from "./components/todoList/TodoList";

const App = () => {
  const [input, setInput] = useState({ inputValue: "", inputTag: "personal" });
  const dispatch = useDispatch();

  const HandleInputChange = (e) => {
    setInput({ ...input, inputValue: e.target.value });
  };

  const HandleTagChange = (e) => {
    setInput({ ...input, inputTag: e.target.value });
  };

  // HAndle add todo
  const handleAddTodo = (e) => {
    if (e.key === "Enter") {
      console.log(input);
      dispatch({ type: "TODO/Added", payload: input });
    }
  };

  return (
    <div className="app">
      <MemoizedHeader />
      <InputBox
        input={input}
        HandleInputChange={HandleInputChange}
        HandleTagChange={HandleTagChange}
        handleAddTodo={handleAddTodo}
      />
      <MemoizedTodoList />
      <MemoizedFooter />
    </div>
  );
};

export default App;
