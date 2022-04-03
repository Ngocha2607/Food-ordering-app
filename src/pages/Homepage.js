import "antd/dist/antd.css";

import { Layout } from "antd";
import React from "react";
import AppHeader from "../components/Layout/Header/Header";
import Cart from "../components/Cart/Cart";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import mealsTable from "../../src/assets/pizza.jpg";
import AppContent from "../components/Layout/Content";

const Homepage = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <AppHeader />
      {!isLoggedIn ? (<img src={mealsTable} alt="A table full of delicious food!" />) : <AppContent />}
      <Outlet />
    </Layout>
  );
};

export default Homepage;
