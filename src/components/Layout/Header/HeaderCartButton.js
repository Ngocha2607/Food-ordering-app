import { useDispatch, useSelector } from "react-redux";
import React from "react";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { toggle } from "../../../store/reducers/ui-slice";

const HeaderCartButton = (props) => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggle());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
