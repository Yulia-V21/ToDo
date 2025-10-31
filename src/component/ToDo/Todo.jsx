import ToDoForm from "../ToDoForm/TodoForm";
import ToDoSearch from "../ToDoSearch/Search";
import "./Todo.css";

const ToDo = () => {
  return (
    <div className="toDoBg">
      <div className="toDo">
        <h2>ToDo</h2>
        <ToDoSearch />
        <ToDoForm />
      </div>
    </div>
  );
};
export default ToDo;
