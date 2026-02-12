import { createReducer, createSlice } from "@reduxjs/toolkit";
import { CREATE_USER, LOGIN_USER } from "./actionsTypes";
import { loginThunk, createNewUser, getOutUser, editPasswordAction} from "./actions";

const initialState = {
  users: [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")),
};

const usersReducer = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.currentUser = action.payload.token;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.users.push({
          id: action.payload.id,
          name: action.payload.userName,
          userName: action.payload.userName,
          password: action.payload.password,
        });
      })
      .addCase(getOutUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(editPasswordAction.fulfilled, (state, action) => {
        console.log(action.payload);
        state.currentUser = action.payload.token;

      })
  },
});

// const usersReducer = createReducer(initialState, (builder) => {
//   builder.addCase(CREATE_USER, (state, action) => {
//     state.users.push({
//       id: action.payload.id,
//       _name: action.payload._name,
//       username: action.payload.username,
//       password: action.payload.password,
//     });
//     builder.addCase(LOGIN_USER, (state, action) => {
//       console.log(action.payload);
//       state.currentUser = action.payload;
//     });
//   });
// });
export default usersReducer.reducer;
