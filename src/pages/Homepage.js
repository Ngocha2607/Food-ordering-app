import "antd/dist/antd.css";

import { Layout } from "antd";
import React from "react";
import AppHeader from "../components/Layout/Header/Header";
import AppContent from "../components/Layout/Content";
import Sidebar from "../components/Layout/Sidebar";
import Cart from "../components/Cart/Cart";
import { useSelector } from "react-redux";

const Homepage = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      {<AppHeader />}
      <Layout>
        <Sidebar />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default Homepage;
