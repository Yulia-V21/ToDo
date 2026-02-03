import ToDoBtN from "../../component/ToDoBtn/TodoBtn";
import person_ico from "./person_ico.png";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PersonAcc.css";
import { useEffect, useState } from "react";

const PersonAcc = () => {
  const [totalTask, setTotalTask] = useState(0);
  const [totalCompleted, setTotalCompleted] = useState(0);
  const todos = useSelector((state) => state.tasks.todos || []);
  console.log(todos);
  const currentUser = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    setTotalTask(todos?.length || 0);
    setTotalCompleted(
      Array.isArray(todos) ? todos.filter((t) => t && t.isCompleted).length : 0,
    );
  }, [todos]);
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
      </div>
    </div>
  );
};
export default PersonAcc;
