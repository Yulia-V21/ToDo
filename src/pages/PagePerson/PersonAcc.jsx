import ToDoBtN from "../../component/ToDoBtn/TodoBtn";
import person_ico from "./person_ico.png";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../../store/tasks/actions";
import "./PersonAcc.css";
import { useEffect, useState } from "react";
import ModalEditPassword from "./ModalEditPassword/ModalEditPassword";

const PersonAcc = () => {
  const [totalTask, setTotalTask] = useState(0);
  const [totalCompleted, setTotalCompleted] = useState(0);
  const todos = useSelector((state) => state.tasks.todos || []);
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks({ token: currentUser, id: jwtDecode(currentUser).id }));
    setTotalTask(todos?.length || 0);
    setTotalCompleted(
      Array.isArray(todos) ? todos.filter((t) => t && t.isCompleted).length : 0,
    );
  }, []); //Здесь точно так должно быть? todos

  const userName = jwtDecode(currentUser).username;
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <div>
      <div className="person_acc_btn">
        <ToDoBtN text="My tasks" onClick={() => handleNavigate("/todo")} />
        <ToDoBtN text="Exit" onClick={() => handleNavigate("/login")} />
      </div>
      <div className="person_acc">
        <div className="person_acc_info">
          <div className="person_acc_img">
            <img src={person_ico} alt="person" />
          </div>
          <h2>Name : {userName}</h2>
          <h3>User Name : {userName}</h3>
        </div>
        <div className="person_acc_tasks">
          <h3> Количество задач: {totalTask}</h3>
          <h3> Количество выполненныx задач: {totalCompleted}</h3>
        </div>

        <ModalEditPassword />
      </div>
    </div>
  );
};
export default PersonAcc;
