import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ToDoBtN from "../ToDoBtn/TodoBtn";
import ToDoList from "../ToDoList/TodoList";
import { jwtDecode } from "jwt-decode";
import {
  addTask,
  deletedTask,
  statusTask,
  editTask,
  saveEditTask,
  fetchTasks,
} from "../../store/tasks/actions";
import { setTaskEditMode } from "../../store/tasks/reducers";
import "./TodoForm.css";

const ToDoForm = () => {
  const todos = useSelector((state) => state.tasks.todos || []);
  const currentUser = useSelector((state) => state.users.currentUser);
  const filteredTasks = useSelector((state) => state.filteredTasks);
  const searchValue = useSelector((state) => state.searchValue);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("USERiD:", jwtDecode(currentUser).id);
    dispatch(fetchTasks({token: currentUser, id: jwtDecode(currentUser).id}));
  }, [dispatch, currentUser]);

  const handleOnChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue !== "") {
      dispatch(
        addTask({
          title: inputValue,
          token: currentUser,
          userId: jwtDecode(currentUser).id,
        }),
      );
      setInputValue("");
    }
  };
  const handleDeleteClick = (id) => {
    dispatch(deletedTask({ id: id, authToken: currentUser }));
  };
  const handleCompleted = (id) => {
    dispatch(statusTask({ id: id, token: currentUser }));
  };

  const handleEditClick = (task) => {
    dispatch(setTaskEditMode({ id: task, isEdit: true }));
  };

  const handleSaveEdit = (id, newTitle) => {
    console.log(id, newTitle);
    dispatch(saveEditTask({ id: id, newTitle: newTitle, token: currentUser }));
  };

  const totalTask = todos?.length;
  // const totalCompleted = Array.isArray(todos)
  //   ? todos.filter((t) => t.isCompleted).length
  //   : 0;
  const totalCompleted = Array.isArray(todos)
    ? todos.filter((t) => t && t.isCompleted).length
    : 0;
  return (
    <>
      <div className="todoTasks">
        <h4>Tasks : {totalTask}</h4>
        <h4>Completed : {totalCompleted} </h4>
      </div>
      <div className="todoForm">
        <div className="todoInputAdd">
          <form>
            <input
              value={inputValue}
              onChange={handleOnChange}
              className="todoInput"
              type="text"
              placeholder="text"
            />
          </form>
          <ToDoBtN text="Add" onClick={handleClick} />
        </div>

        <ToDoList
          tasks={searchValue ? filteredTasks : todos}
          onDeleteClick={handleDeleteClick}
          onComletedClick={handleCompleted}
          onHandleEditClick={handleEditClick}
          onSaveEdit={handleSaveEdit}
        />
      </div>
    </>
  );
};
export default ToDoForm;
