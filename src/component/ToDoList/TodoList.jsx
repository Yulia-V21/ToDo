import ToDoItem from "../ToDoItem/TodoItem";
import "./TodoList.css";
const ToDoList = ({
  task,
  onDeleteClick,
  onComletedClick,
  onHandleEditClick,
  onSaveEdit
 
}) => {
  return (
    <div className="toDoList">
      {task.map((el, index) => (
        <ToDoItem
          id={index}
          key={index}
          taskItem={el}
          onDeleteClick={onDeleteClick}
          onComletedClick={onComletedClick}
          onHandleEditClick={onHandleEditClick}
          onSaveEdit = {onSaveEdit}
         
        />
      ))}
    </div>
  );
};
export default ToDoList;
