import { createReducer } from "@reduxjs/toolkit";
import {
  ADD_TASK,
  DELETE_TASK,
  STATUS_TASK,
  EDIT_TASK,
  SAVE_EDIT_TASK,
  SEARCH_TASK,
} from "./actionsTypes";

const initialState = {
  todos: [],
  filteredTasks: [],
  searchValue: "",
};

const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ADD_TASK, (state, action) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload,
        isCompleted: false,
        isEdit: false,
      });
    })
    .addCase(DELETE_TASK, (state, action) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    })
    .addCase(STATUS_TASK, (state, action) => {
      state.todos = state.todos.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });
    })
    .addCase(EDIT_TASK, (state, action) => {
      state.todos = state.todos.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isEdit: !task.isEdit,
          };
        }
        return task;
      });
    })
    .addCase(SAVE_EDIT_TASK, (state, action) => {
      state.todos = state.todos.map((task) =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.newTitle, isEdit: false }
          : task
      );
    })
    .addCase(SEARCH_TASK, (state, action) => {
      state.searchValue = action.payload;
      if (action.payload !== "") {
        state.filteredTasks = state.todos.filter((task) =>
          task.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else {
        state.filteredTasks = state.todos;
      }
    });
});
export default todosReducer;
