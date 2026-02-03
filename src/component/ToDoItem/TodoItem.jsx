import { useState } from "react";
import ToDoBtN from "../ToDoBtn/TodoBtn";
import "./TodoItem.css";

const ToDoItem = ({
  taskItem,
  onDeleteClick,
  onComletedClick,
  onHandleEditClick,
  onSaveEdit, 
}) => {
  const [inputValue, setInputValue] = useState(taskItem?.title || '');

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveClick = () => {
    onSaveEdit(taskItem.id, inputValue);
  };
  
if (!taskItem) {
  return null;
}
  return (
    <div className="toDoItem">
      <div className="toDoItemText">
        
        {
        taskItem.isEdit ? (
          <input type="text" value={inputValue} onChange={handleOnChange} />
        ) : (
      
          <p
            className={`todoItemTask ${taskItem?.isCompleted ? "comleted" : ""}`}
          >
            {taskItem.title}
          </p>
         )} 
      </div>
      <div className="toDoItemBtn">
        <ToDoBtN
          text="Delete"
          onClick={() => onDeleteClick(taskItem.id)}
        />
        <ToDoBtN
          text="Ok"
          onClick={() => onComletedClick(taskItem.id)}
        />
        <ToDoBtN
          text={taskItem.isEdit ? "Save" : "Edit"}
          onClick={() => {
            if (taskItem.isEdit) {
              handleSaveClick(); 
            } else {
              onHandleEditClick(taskItem.id);
            }
          }}
        />
      </div>
    </div>
  );
};

export default ToDoItem;

