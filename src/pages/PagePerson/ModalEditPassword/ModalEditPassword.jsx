import { useState, useEffect } from "react";
import { editPasswordAction } from "../../../store/users/actions";
import ToDoBtN from "../../../component/ToDoBtn/TodoBtn";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import "./ModalEditPassword.css";

const ModalEditPassword = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const dispatch = useDispatch();

  const handleSave = () => {
    if (newPassword !== confirmPassword) {
      alert("Пароль не совпадает");
    }
    dispatch(
      editPasswordAction({
        id: jwtDecode(currentUser).id,
        password: newPassword,
        username: jwtDecode(currentUser).username,
        token: currentUser,
      }),
    );
  };
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser),
      );
    }
  }, [currentUser]);
  
  return (
    <div className="modal">
      <div className="modal_input_block">
        <h4>Новый пароль</h4>
        <input
          type="password"
          placeholder="new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="modal_input_block">
        <h4>Подтвердите новый пароль</h4>
        <input
          type="password"
          placeholder="new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <ToDoBtN text="Сохранить" onClick={handleSave} />
      <ToDoBtN text="Отмена" onClick={() => console.log("Отмена")} />
    </div>
  );
};
export default ModalEditPassword;
