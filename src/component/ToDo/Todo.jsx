import ToDoBtN from "../ToDoBtn/TodoBtn";
import ToDoForm from "../ToDoForm/TodoForm";
import ToDoSearch from "../ToDoSearch/Search";
import { getOutUser } from "../../store/users/actions";
import { useNavigate } from "react-router-dom";
import "./Todo.css";
import { useDispatch } from "react-redux";


const ToDo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGetOut = () => {
    dispatch(getOutUser());
    navigate("/");
  };

  const handlePersonAcc = () => {
    navigate("/person");
  };
  return (
    <div className="todo">
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
