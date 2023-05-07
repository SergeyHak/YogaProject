import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/hooks/use-auth";

function ProtectedRoute() {
    const { isAuth } = useAuth();

    if (!isAuth) {
      return <Navigate to="/" replace />;
    }

  return <Outlet />;
}

export default ProtectedRoute;
