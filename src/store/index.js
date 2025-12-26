import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers";
import usersReducer from "./usersTasks/reducers";

const store = configureStore({ reducer: {users: usersReducer, tasks: todosReducer} });

export default store;
