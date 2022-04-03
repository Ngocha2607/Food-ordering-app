import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/reducers/user-slice";
import { Link } from "react-router-dom";
import { isShowLogin } from "../../../store/reducers/ui-slice";

const { Header } = Layout;

const AppHeader = (props) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const showLogin = () => {
    dispatch(isShowLogin());
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const signInButton = (
    <button className={classes.button} onClick={showLogin}>
      <Link to="auth">Sign In</Link>
    </button>
  );
  const cartButton = isLoggedIn && (
    <>
      <HeaderCartButton />
      <button className={classes.button} onClick={logoutHandler}>
        Sign Out
      </button>
    </>
  );
  return (
    <Header className={classes.header}>
      <Link to="/">
        <h1 className={classes.logo}>Sunny Food</h1>
      </Link>
      {cartButton}
      {!isLoggedIn && signInButton}
    </Header>
  );
};

export default AppHeader;
