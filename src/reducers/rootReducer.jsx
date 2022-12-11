import { todosReducer } from "./todoSlice";
import { todosStatusFilterReducer } from "./todoStatusSlicer";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  todos: todosReducer,
  todosStatusFilter: todosStatusFilterReducer,
});
