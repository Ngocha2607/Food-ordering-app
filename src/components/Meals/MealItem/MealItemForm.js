import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../store/reducers/cart-slice";

const MealItemForm = (props) => {
  const dispatch = useDispatch();
  const { title, price, id } = props.item;

  const addItem = {
    id,
    title,
    price,
  };

  const addToCartHandler = () => {
    dispatch(addItemToCart(addItem));
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addToCartHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
