import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/hooks/use-auth";

function ProtectedRoute({ redirectPath = "/", isAllowed }) {
    const { isAuth } = useAuth();

    if (!isAuth) {
      return <Navigate to="/login" replace />;
    }

  return <Outlet />;
}

export default ProtectedRoute;
