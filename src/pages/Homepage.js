import "antd/dist/antd.css";

import { Layout } from "antd";
import React, { useEffect } from "react";
import AppHeader from "../components/Layout/Header/Header";
import AppContent from "../components/Layout/Content";
import Sidebar from "../components/Layout/Sidebar";
import Cart from "../components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../components/UI/Notification";
import { sendCartData } from "../store/reducers/cart-slice";

let isInitial = true;

const Homepage = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Layout>
      {showCart && <Cart />}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {<AppHeader />}
      <Layout>
        <Sidebar />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default Homepage;
