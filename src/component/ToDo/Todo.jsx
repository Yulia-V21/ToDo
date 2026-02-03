import ToDoBtN from "../ToDoBtn/TodoBtn";
import ToDoForm from "../ToDoForm/TodoForm";
import ToDoSearch from "../ToDoSearch/Search";
import { useNavigate } from "react-router-dom";
import "./Todo.css";

const ToDo = () => {
  const navigate = useNavigate();
  const handleGetOut = () => {
    navigate("/login");
  };

  const handlePersonAcc = () => {
    navigate("/person");
  };
  return (
    <div>
        <div className="todo_btn">
          <ToDoBtN text="Личный кабинет" onClick={handlePersonAcc} />
          <ToDoBtN text="Выйти" onClick={handleGetOut} />
        </div>
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
