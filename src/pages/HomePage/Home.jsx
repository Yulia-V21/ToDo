import { useNavigate } from "react-router-dom";
import ToDoBtN from "../../component/ToDoBtn/TodoBtn";
import Animation from "./Animation/Animation";
import "./HomePage.css";
import Carousel from "./Carousel/Carousel";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(url);
  };
  return (
    <div className="home_bg">
      <div className="home_page">
        <Animation />
        <div className="home_page_btn">
          <ToDoBtN text="Войти" onClick={() => handleNavigate("/login")} />
        </div>
      </div>
      <Carousel />
    </div>
  );
};
export default Home;
