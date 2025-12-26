import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ToDoBtN from "../../component/ToDoBtn/TodoBtn";
import "./LoginPage.css";
import { useDispatch } from "react-redux";
import { loginUserAction, loginThunk } from "../../store/usersTasks/actions";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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
  const handleLogin = (url) => {
    dispatch(loginThunk(userName, password));
    // navigate(url);
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
        {/* <input type="text" placeholder="User Name" /> */}
        <input
          value={password}
          onChange={handleOnChangePassword}
          type="password"
          placeholder="Password"
        />
        <ToDoBtN text="Войти" onClick={() => handleLogin("/todo")} />
      </div>
    </div>
  );
};
export default LoginPage;
