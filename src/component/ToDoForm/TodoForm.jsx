import { useState, useEffect } from "react";
import ToDoBtN from "../ToDoBtn/TodoBtn";
import ToDoList from "../ToDoList/TodoList";
import { data } from "../../asset/toDoData";
import "./TodoForm.css";

const ToDoForm = ({ searchValue }) => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(data);
  const [searchTask, setSearchTask] = useState(data);

  useEffect(() => {
    if (searchValue !== "") {
      setSearchTask(
        tasks.filter((task) =>
          task.title.toLowerCase().includes(searchValue.toLowerCase())
        
        )
      );
    } else {
      setSearchTask(tasks);
    }
  }, [searchValue, tasks]);

  const handleOnChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue !== "") {
      setTasks((prevTask) => [
        ...prevTask,
        {
          id: Date.now(),
          title: inputValue,
          isCompleted: false,
          isEdit: false,
        },
      ]);
      setInputValue("");
    }
  };
  const handleDeleteClick = (id) => {
    const tempTasks = [...tasks];
    setTasks(
      tempTasks.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const handleCompleted = (id) => {
    const tempTasks = [...tasks];
    setTasks(
      tempTasks.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            isCompleted: !el.isCompleted,
          };
        }
        return el;
      })
    );
  };
  const handleEditClick = (id) => {
    const tempTasks = [...tasks];
    setTasks(
      tempTasks.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            isEdit: !el.isEdit,
          };
        }
        return el;
      })
    );
  };
  const handleSaveEdit = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        tasks.id === id ? { ...tasks, title: newTitle, isEdit: false } : tasks
      )
    );
  };

  const totalTask = tasks.length;
  const totalCompleted = tasks.filter((t) => t.isCompleted).length;
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
          task={searchTask}
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
