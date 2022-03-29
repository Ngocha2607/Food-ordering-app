import React from "react";
import { Layout } from "antd";
import mealsImage from "../../assets/meals.jpg";
import Meals from "../Meals/Meals";
import classes from "./Content.module.css";
const { Content } = Layout;

const AppContent = () => (
  <Content style={{ margin: "24px 16px 0" }}>
    <div className={classes["main-image"]}>
      <img src={mealsImage} alt="A table full of delicious food!" />
    </div>
    <Meals />
  </Content>
);

export default AppContent;
