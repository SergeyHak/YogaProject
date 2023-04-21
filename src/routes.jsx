import { Routes, Route} from "react-router-dom"

import Registration from "./pages/authorization/registration";
import Login from "./pages/authorization/login";


function AppRoutes() {
  
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
} 

export default AppRoutes;