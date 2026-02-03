import server from "./server";

export const fetchUsers = () => server.get("/users/");
export const createUser = ({name, username, password}) =>
  server.post("/users/", { name, username, password });

export const getUserById = (id) => server.get(`/users/:${id}`);
export const deleteUser = (id) => server.delete(`/users/:${id}`);
export const loginUser = (username, password) => {
  console.log(password);
  return server.post("/users/login", { username, password });
};
export const editPassword = (password, id) =>
  server.patch(`/users/:${id}`, { password });
export const editPasswordByName = (name, password, username) =>
  server.patch("/users/", { name, password, username });
