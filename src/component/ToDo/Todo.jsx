import ToDoBtN from "../ToDoBtn/TodoBtn";
import ToDoForm from "../ToDoForm/TodoForm";
import ToDoSearch from "../ToDoSearch/Search";
import "./Todo.css";

const ToDo = () => {
  return (
    <div>
    <div className="toDoBg">
      <div className="toDo">
        <h2>ToDo</h2>
        <ToDoSearch />
        <ToDoForm />
      </div>
    </div>
    </div>
  );
};
export default ToDo;
