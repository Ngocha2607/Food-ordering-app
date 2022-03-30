import Modal from "../UI/Modal";
import React, { useState } from "react";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/reducers/ui-slice";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const closeCartItem = () => {
    dispatch(toggle());
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    fetch(
      "https://food-ordering-app-98452-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cart.items,
          totalAmount: cart.totalAmount
        }),
      }
    );
  };

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={closeCartItem}>
        Close
      </button>
      <button className={classes.button} onClick={orderHandler}>
        Order
      </button>
    </div>
  );
  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {cart.items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${cart.totalAmount.toFixed(2)}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={closeCartItem} onSubmit={submitOrderHandler} />
      )}
      {!isCheckout && modalAction}
    </Modal>
  );
};

export default Cart;
