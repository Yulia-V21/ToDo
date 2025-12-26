import server from "./server";


export const getTasks = () => server.get("/tasks/");
export const createTask = (title, userId) => server.post("/tasks/create-task", {title, userId});
export const updateTask = (title, id) => server.patch("/tasks/update-task", {title, id});
export const completedTask = (id) => server.patch(`/tasks/completed/:${id}`);
export const deleteTask = (id) => server.delete(`/tasks/delete-task/:${id}`);