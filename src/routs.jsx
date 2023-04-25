import { Routes, Route } from "react-router-dom";

import Registration from "./pages/authorization/registration";
import Login from "./pages/authorization/login";
import MainPage from "./pages/Main/Main";
import Lesson from "./pages/lesson/Lesson";
import CoursePage from "./pages/coursePage/coursePage";
import ProfilePage from "./pages/profile/profile";
import WorkoutPage from "./pages/workoutVideo/workoutVideo";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/lesson" element={<Lesson />} />
      <Route path="/courses" element={<CoursePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/workout" element={<WorkoutPage />} />
    </Routes>
  );
}

export default AppRoutes;
