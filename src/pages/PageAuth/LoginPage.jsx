import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ToDoBtN from "../../component/ToDoBtn/TodoBtn";
import "./LoginPage.css";
import { useDispatch } from "react-redux";
import { createNewUser, loginThunk } from "../../store/users/actions";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const userStore = useSelector((state) => state.users);

  useEffect(() => {
    if (userStore.currentUser) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(userStore.currentUser),
      );
    }
  }, [userStore.currentUser]);

  const dispatch = useDispatch();

  const handleOnChangeName = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(loginThunk({ userName, password })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/todo");
      } else {
        alert("Неверный логин или пароль");
      }
    });
  };
  const handleCreateNewUser = () => {
    dispatch(createNewUser({ name: userName, userName, password })).then(
      (result) => {
        if (result.meta.requestStatus === "fulfilled") {
          navigate("/todo");
        } else {
          alert("Неверный логин или пароль");
        }
      },
    );
  };

  return (
    <div className="login_page">
      <div className="login_page_form">
        <input
          value={userName}
          onChange={handleOnChangeName}
          type="text"
          placeholder="User Name"
        />
        <input
          value={password}
          onChange={handleOnChangePassword}
          type="password"
          placeholder="Password"
        />
        <ToDoBtN text="Войти" onClick={handleLogin} />
        <ToDoBtN text="Зарегистрироваться" onClick={handleCreateNewUser} />
      </div>
    </div>
  );
};
export default LoginPage;
