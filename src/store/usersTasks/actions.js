import { CREATE_USER, LOGIN_USER } from "./actionsTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../services/userService";

export const loginThunk = createAsyncThunk(
  LOGIN_USER,
  async (username, password) => {
    const response = await loginUser(username, password);
    return response.data;
  }
);

export const createUser = (id, _name, username, password) => ({
  type: CREATE_USER,
  payload: {
    id: id,
    _name: _name,
    username: username,
    password: password,
  },
});
export const loginUserAction =
  (username, password) => async (dispatch, getState) => {
    const response = await loginUser(username, password);
    console.log(response);
    dispatch({ type: LOGIN_USER, payload: response.data.token });
  };
