import { Routes, Route } from "react-router-dom";
import Registration from "./pages/authorization/registration";
import Login from "./pages/authorization/login";
import MainPage from "./pages/Main/Main";
import Lesson from "./pages/lesson/Lesson";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/registration" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<MainPage/>} />
      <Route path="/lesson" element={<Lesson/>} />
    </Routes>
  );
}

export default AppRoutes;
