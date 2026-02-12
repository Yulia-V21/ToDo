import {
  CREATE_USER,
  LOGIN_USER,
  GET_OUT_USER,
  EDIT_PASSWORD_USER,
} from "./actionsTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser,
  createUser,
  editPassword,
} from "../../services/userService";

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

export const getOutUser = createAsyncThunk(GET_OUT_USER, async () => {
  localStorage.removeItem("currentUser");
  return null;
});

export const editPasswordAction = createAsyncThunk(
  EDIT_PASSWORD_USER,
  async ({ password, id, username, token }) => {
    console.log("ACTIONS", token);
    const authToken = "Bearer " + token;
    console.log(id, password);
    const response = await editPassword({ password, id, username, authToken });
    return response.data;
  },
);

export const loginUserAction =
  (username, password) => async (dispatch, getState) => {
    const response = await loginUser(username, password);
    console.log(response);
    dispatch({ type: LOGIN_USER, payload: response.data.token });
  };
