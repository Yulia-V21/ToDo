import {
  ADD_TASK,
  DELETE_TASK,
  STATUS_TASK,
  EDIT_TASK,
  SAVE_EDIT_TASK,
  SEARCH_TASK,
} from "./actionsTypes";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: title,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const statusTask = (id) => ({
  type: STATUS_TASK,
  payload: id,
});

export const editTask = (id) => ({
  type: EDIT_TASK,
  payload: id,
});
export const saveEditTask = (id, newTitle) => ({
  type: SAVE_EDIT_TASK,
  payload: {
    id: id,
    newTitle: newTitle,
  },
});

export const searchTask = (searchValue) => ({
  type: SEARCH_TASK,
  payload: searchValue,
});
