import React from "react";
import FloatingShape from "./components/FloatingShape";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUp";
import { useAuthStore } from "./store/authStore";
import DashboardPage from "./pages/DashboardPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage ";
import ResetPasswordPage from "./pages/ResetPasswordPage ";


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  if (!user.isVerified) {
    return <Navigate to='/verify-email' replace />;
  }

  return children;
};


const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to='/' replace />;
  }

  return children;
};


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
        {/* <Route path="/" element="Home" /> */}

        <Route
          path='/'
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }

        />
        <Route
          path='/signup'
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path='/login'
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path='/verify-email' element={<EmailVerificationPage />} />
        <Route
          path='/forgot-password'
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        <Route
          path='/reset-password/:token'
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        {/* catch all routes */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
};

export default App;
