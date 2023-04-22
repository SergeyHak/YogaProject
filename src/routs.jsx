import { Routes, Route } from "react-router-dom";

import Registration from "./pages/authorization/registration";
import Login from "./pages/authorization/login";
import MainPage from "./pages/Main/Main";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default AppRoutes;
