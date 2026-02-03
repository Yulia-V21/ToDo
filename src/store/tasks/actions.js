import {
  ADD_TASK,
  DELETE_TASK,
  STATUS_TASK,
  EDIT_TASK,
  SAVE_EDIT_TASK,
  SEARCH_TASK,
  FETCH_TASKS,
} from "./actionsTypes";
import {
  getTasks,
  createTask,
  updateTask,
  completedTask,
  deleteTask,
} from "../../services/tasksService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(FETCH_TASKS, async ({token, id}) => {
  console.log("CONSOLE.LOG:ID", id);
  const authToken = "Bearer " + token;
  const response = await getTasks({authToken, id});
  return response.data;
});

export const statusTask = createAsyncThunk(
  STATUS_TASK,
  async ({ id, token }) => {
    const authToken = "Bearer " + token;
    const response = await completedTask({ id, authToken });
    return response.data;
  }
);

export const addTask = createAsyncThunk(
  ADD_TASK,
  async ({ title, token, userId }) => {
    const token1 = "Bearer " + token;
    const response = await createTask({ title, userId, token1 });
    return response.data;
  }
);

export const deletedTask = createAsyncThunk(
  DELETE_TASK,
  async ({ id, authToken }) => {
    const token = "Bearer " + authToken;
    const response = await deleteTask({ id, token });
    return response.data;
  }
);

export const saveEditTask = createAsyncThunk(
  SAVE_EDIT_TASK,
  async ({ id, newTitle, token }) => {
    const authToken = "Bearer " + token;
    const response = await updateTask({ id, newTitle, authToken });
    return response.data;
  }
);

// export const editTask = createAsyncThunk(
//   EDIT_TASK,
//   async ( {id, token}) => {
//     const authToken = "Bearer " + token;
//     const response = await updateTask({id, authToken});
//     console.log(response);
//     return response.data;

//   }
// )

// export const deleteTask = (id) => ({
//   type: DELETE_TASK,
//   payload: id,
// });

// export const editTask = (id) => ({
//   type: EDIT_TASK,
//   payload: id,
// });
// export const saveEditTask = (id, newTitle) => ({
//   type: SAVE_EDIT_TASK,
//   payload: {
//     id: id,
//     newTitle: newTitle,
//   },
// });

export const searchTask = (searchValue) => ({
  type: SEARCH_TASK,
  payload: searchValue,
});
