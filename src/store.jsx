import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

const initialState = {
  Todos: [],
  status: {
    status: "all",
  },
};

// Get the stored data from localStorage
const getStoredTodosData = () => {
  const storedTodosData = localStorage.getItem("storedTodosData");
  return storedTodosData ? JSON.parse(storedTodosData) : initialState;
};

// create the store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getStoredTodosData(),
});

// subscribe store to localStorage properly
store.subscribe(() => {
  localStorage.setItem("storedTodosData", JSON.stringify(store.getState()));
});
