import { useNavigate } from "react-router-dom";
import ToDoBtN from "../../component/ToDoBtn/TodoBtn";
import "./HomePage.css";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(url);
  };
  return (
    <div className="home_page">
        <h3>Home page</h3>
      <div className="home_page_btn">
        <ToDoBtN text="Войти" onClick={() => handleNavigate("/login")} />
      </div>
    </div>
  );
};
export default Home;
