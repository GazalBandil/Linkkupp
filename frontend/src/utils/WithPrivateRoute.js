import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.js";

const WithPrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default WithPrivateRoute;
