import Modal from "../UI/Modal";
import React, { useState } from "react";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/reducers/ui-slice";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { clearCart } from "../../store/reducers/cart-slice";

const isTotalAmountValid = (totalAmount) => totalAmount > 1;

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cart = useSelector((state) => state.cart);

  const totalAmountIsValid = isTotalAmountValid(cart.totalAmount);
  
  const dispatch = useDispatch();
  const closeCartItem = () => {
    dispatch(toggle());
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://food-ordering-app-98452-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cart.items,
          totalAmount: cart.totalAmount,
          totalQuantity: cart.totalQuantity,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    dispatch(clearCart());
  };

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={closeCartItem}>
        Close
      </button>
      {totalAmountIsValid && <button className={classes.button} onClick={orderHandler}>
        Order
      </button>}
    </div>
  );

  const cartModalContent = (
    <>
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
    </>
  );

  const isSubmittingModalContent = <div className={classes.sending}><p>Sending order data...</p></div>;
  const didSubmitModalContent = (
    <>
      <div className={classes.success}><p>Successfully sent the order!</p></div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCartItem}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
