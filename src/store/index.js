import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./tasks/reducers";
import usersReducer from "./users/reducers";

const store = configureStore({
  reducer: { users: usersReducer, tasks: todosReducer },
});

export default store;
