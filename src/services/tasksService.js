import server from "./server";

export const getTasks = ({ authToken, id }) => {
  console.log(id);
  return server.get(`/tasks/${id}`, { headers: { Authorization: authToken } });
};

export const createTask = ({ title, userId, token1 }) =>
  server.post(
    "/tasks/create-task",
    { title, userId },
    { headers: { Authorization: token1 } },
  );

export const updateTask = ({ id, newTitle, authToken }) =>
  server.patch(
    `/tasks/update-task/${id}`,
    { newTitle },
    { headers: { Authorization: authToken } },
  );

export const completedTask = ({ id, newTitle, authToken }) =>
  server.patch(
    `/tasks/completed/${id}`,
    { newTitle },
    { headers: { Authorization: authToken } },
  );
export const deleteTask = ({ id, token }) =>
  server.delete(`/tasks/delete-task/${id}`, {
    headers: { Authorization: token },
  });
