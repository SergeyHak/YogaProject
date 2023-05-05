import { Routes, Route } from "react-router-dom";
import { useAuth } from "../store/hooks/use-auth";

import Registration from "../pages/authorization/registration";
import Login from "../pages/authorization/login";
import MainPage from "../pages/Main/Main";
import Lesson from "../pages/lesson/Lesson";
import CoursePage from "../pages/coursePage/coursePage";
import ProfilePage from "../pages/profile/profile";
import ProtectedRoute from "./protectedRouts";

function AppRoutes() {
  const { isAuth } = useAuth;

  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/yoga" element={<CoursePage refURL={"courses/ab1c3f"} />} />
      <Route
        path="/stretching"
        element={<CoursePage refURL={"courses/t4si4o"} />}
      />
      <Route
        path="/dance-fitness"
        element={<CoursePage refURL={"courses/82kln2"} />}
      />
      <Route
        path="/step-aerobics"
        element={<CoursePage refURL={"courses/9jp0yg"} />}
      />
      <Route
        path="/bodyflex"
        element={<CoursePage refURL={"courses/3bu6y5"} />}
      />
      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
