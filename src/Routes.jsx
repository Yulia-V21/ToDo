import { Route, Routes } from "react-router-dom";
import ToDo from "./component/ToDo/Todo";
import LoginPage from "../src/pages/PageAuth/LoginPage";
import Home from "./pages/HomePage/Home";
import PersonAcc from "./pages/PagePerson/PersonAcc";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/person" element={<PersonAcc/>} />
        </Routes>
    )
}
export default AppRoutes;