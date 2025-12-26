import { Route, Routes } from "react-router-dom";
import ToDo from "./component/ToDo/Todo";
import LoginPage from "./pages/PageAuth/LoginPage";
import Home from "./pages/HomePage/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/todo" element={<ToDo />} />
        </Routes>
    )
}
export default AppRoutes;