import ToDoItem from "../ToDoItem/TodoItem";
import "./TodoList.css";
const ToDoList = ({
  tasks,
  onDeleteClick,
  onComletedClick,
  onHandleEditClick,
  onSaveEdit,
}) => {
  
  return (
    <div className="toDoList">
      {Array.isArray(tasks) && tasks.map((el, index) => (
        <ToDoItem
          id={index}
          key={index}
          taskItem={el}
          onDeleteClick={onDeleteClick}
          onComletedClick={onComletedClick}
          onHandleEditClick={onHandleEditClick}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </div>
  );
};
export default ToDoList;
