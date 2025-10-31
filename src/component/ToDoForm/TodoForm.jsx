import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ToDoBtN from "../ToDoBtn/TodoBtn";
import ToDoList from "../ToDoList/TodoList";
import {
  addTask,
  deleteTask,
  statusTask,
  editTask,
  saveEditTask,
} from "../../store/actions";
import "./TodoForm.css";

const ToDoForm = () => {
  const todos = useSelector((state) => state.todos);
  const filteredTasks = useSelector((state) => state.filteredTasks);
  const searchValue = useSelector((state) => state.searchValue);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue !== "") {
      console.log(inputValue);
      dispatch(addTask(inputValue));

      setInputValue("");
    }
  };
  const handleDeleteClick = (id) => {
    dispatch(deleteTask(id));
  };
  const handleCompleted = (id) => {
    dispatch(statusTask(id));
  };
  const handleEditClick = (id) => {
    dispatch(editTask(id));
  };
  const handleSaveEdit = (id, newTitle) => {
    dispatch(saveEditTask(id, newTitle));
  };

  const totalTask = todos.length;
  const totalCompleted = todos.filter((t) => t.isCompleted).length;
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
