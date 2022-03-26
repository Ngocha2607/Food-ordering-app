import "antd/dist/antd.css";

import { Layout } from "antd";
import React from "react";
import AppHeader from "../components/Layout/Header";
import AppContent from "../components/Layout/Content";
import Sidebar from "../components/Layout/Sidebar";

const Homepage = () => {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <Sidebar />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default Homepage;
