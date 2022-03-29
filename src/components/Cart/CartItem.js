import React from "react";
import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/reducers/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, quantity, id } = props.item;

  const addItem = {
    id,
    title,
    price,
  };

  const addToCartHandler = () => {
    dispatch(addItemToCart(addItem));
  };

  const removeFromCartHandler = () => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <li>
      <div className={classes["cart-item"]}>
        <h3>{title}</h3>
        <div className={classes["cart-item"]}>
          <div style={{ marginRight: "2.5rem" }}>x{quantity}</div>
          <div>${price}</div>
          <div className={classes.action}>
            <button onClick={addToCartHandler}>+</button>
            <button onClick={removeFromCartHandler}>-</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
