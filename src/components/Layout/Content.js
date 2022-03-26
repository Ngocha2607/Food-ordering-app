import React from "react";
import mealImage from "../../assets/meals.jpg";
import { Layout } from "antd";

import classes from "./Content.module.css";

const { Content } = Layout;

const AppContent = () => (
  <Content style={{ margin: "24px 16px 0" }}>
    <div
      className={classes["site-layout-background"]}
      style={{ padding: 24, minHeight: 360 }}
    >
      <img src={mealImage} alt="Some food!" />
    </div>
    <div
      className={classes["site-layout-background"]}
      style={{ padding: 24, minHeight: 360 }}
    >
      <img src={mealImage} alt="Some food!" />
    </div>
    <div
      className={classes["site-layout-background"]}
      style={{ padding: 24, minHeight: 360 }}
    >
      <img src={mealImage} alt="Some food!" />
    </div>
  </Content>
);

export default AppContent;
