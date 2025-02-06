import React from "react";
import FloatingShape from "./components/FloatingShape";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUp";

const App = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-500 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
      <div className="">
        <FloatingShape
          color="bg-green-500"
          size="w-64 h-64"
          top="-5%"
          left="10%"
          delay={0}
        />{" "}
        <FloatingShape
          color="bg-emerald-500"
          size="w-48 h-48"
          top="70%"
          left="80%"
          delay={5}
        />{" "}
        <FloatingShape
          color="bg-line-500"
          size="w-32 h-32"
          top="40%"
          left="-10%"
          delay={2}
        />
      </div>

      <Routes>
        <Route path="/" element="Home" />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
