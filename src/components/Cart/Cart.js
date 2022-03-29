import Modal from "../UI/Modal";
import React from "react";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/reducers/ui-slice";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();
  const closeCartItem = () => {
    dispatch(toggle());
  };

  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {cartItems.map((item) => (
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
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCartItem}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
