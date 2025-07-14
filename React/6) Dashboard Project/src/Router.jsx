import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import AddStudentComp from "./pages/add-student";
import AddTrainer from "./pages/add-trainer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="add-student" element={<AddStudentComp />} />
        <Route path="add-trainer" element={<AddTrainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
