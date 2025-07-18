import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import AddStudentComp from "./pages/add-student";
import AddTrainer from "./pages/add-trainer";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route
          path="add-student"
          element={
            <ProtectedRoute>
              <AddStudentComp />
            </ProtectedRoute>
          }
        />
        <Route
          path="add-trainer"
          element={
            <ProtectedRoute>
              <AddTrainer />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
