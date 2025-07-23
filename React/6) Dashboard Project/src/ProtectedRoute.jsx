import { Navigate } from "react-router-dom";
import useAppStore from "./store";

const ProtectedRoute = ({ children }) => {
  const { userId } = useAppStore();
  if (!userId) { 
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
