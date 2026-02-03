import { CREATE_USER, LOGIN_USER } from "./actionsTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, createUser } from "../../services/userService";

export const loginThunk = createAsyncThunk(
  LOGIN_USER,
  async ({ userName, password }) => {
    const response = await loginUser(userName, password);
    return response.data;
  },
);
export const createNewUser = createAsyncThunk(
  CREATE_USER,
  async ({ name, userName, password }) => {
    const response = await createUser({ name, username: userName, password });
    console.log(response);
    return response.data;
  },
);

// export const createUser = (id, _name, username, password) => ({
//   type: CREATE_USER,
//   payload: {
//     id: id,
//     _name: _name,
//     username: username,
//     password: password,
//   },
// });
export const loginUserAction =
  (username, password) => async (dispatch, getState) => {
    const response = await loginUser(username, password);
    console.log(response);
    dispatch({ type: LOGIN_USER, payload: response.data.token });
  };
