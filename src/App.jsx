import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import InputBox from "./components/inputBox/InputBox";
import Footer from "./components/footer/Footer";
import TodoList from "./components/todoList/TodoList";

const App = () => {
  return (
    <div className="app">
      <Header />
      <InputBox />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
