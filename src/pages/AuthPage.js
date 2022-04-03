import React from "react";
import { useSelector } from "react-redux";
import AuthForm from "../components/Auth/AuthForm";

const AuthPage = () => {
  const showLogin = useSelector((state) => state.ui.loginIsShow);

  return <>{showLogin && <AuthForm />}</>;
};

export default AuthPage;
