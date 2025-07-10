import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ForgotPassword from "./components/auth/ForgotPassword";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
