import React from "react";
import CartIcon from "../Card/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
);

export default HeaderCartButton;
