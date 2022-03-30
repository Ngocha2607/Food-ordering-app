import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const inputNameRef = useRef();
  const inputStreetRef = useRef();
  const inputPostalRef = useRef();
  const inputCityRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = inputNameRef.current.value;
    const enteredStreet = inputStreetRef.current.value;
    const enteredPostal = inputPostalRef.current.value;
    const enteredCity = inputCityRef.current.value;

    const enteredNameIsValue = !isEmpty(enteredName);
    const enteredStreetIsValue = !isEmpty(enteredStreet);
    const enteredCityIsValue = !isEmpty(enteredCity);
    const enteredPostalIsValue = isFiveChars(enteredPostal);

    setFormInputValidity({
      name: enteredNameIsValue,
      street: enteredStreetIsValue,
      postal: enteredPostalIsValue,
      city: enteredCityIsValue,
    });
    const formIsValid =
      enteredNameIsValue &&
      enteredCityIsValue &&
      enteredPostalIsValue &&
      enteredStreetIsValue;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
        name: enteredName,
        street: enteredStreet,
        postal: enteredPostal,
        city: enteredCity
    })
  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`
  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`
  const postalControlClasses = `${classes.control} ${
    formInputValidity.postal ? "" : classes.invalid
  }`
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div
        className={nameControlClasses}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={inputNameRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={inputStreetRef} />
        {!formInputValidity.name && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={inputPostalRef} />
        {!formInputValidity.name && <p>Please enter a valid postal!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={inputCityRef} />
        {!formInputValidity.name && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
