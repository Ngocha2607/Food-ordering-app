import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isPhoneNumber = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    address: true,
    phone: true,
    note: true,
  });
  const inputNameRef = useRef();
  const inputAddressRef = useRef();
  const inputPhoneRef = useRef();
  const inputNoteRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = inputNameRef.current.value;
    const enteredAddress = inputAddressRef.current.value;
    const enteredPhone = inputPhoneRef.current.value;
    const enteredNote = inputNoteRef.current.value;

    const enteredNameIsValue = !isEmpty(enteredName);
    const enteredAddressIsValue = !isEmpty(enteredAddress);
    const enteredNoteIsValue = !isEmpty(enteredNote);
    const enteredPhoneIsValue = isPhoneNumber(enteredPhone);

    setFormInputValidity({
      name: enteredNameIsValue,
      address: enteredAddressIsValue,
      phone: enteredPhoneIsValue,
      note: enteredNoteIsValue,
    });
    const formIsValid =
      enteredNameIsValue &&
      enteredNoteIsValue &&
      enteredPhoneIsValue &&
      enteredAddressIsValue;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
        name: enteredName,
        address: enteredAddress,
        phone: enteredPhone,
        note: enteredNote
    })
  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`
  const addressControlClasses = `${classes.control} ${
    formInputValidity.address ? "" : classes.invalid
  }`
  const phoneControlClasses = `${classes.control} ${
    formInputValidity.phone ? "" : classes.invalid
  }`
  const noteControlClasses = `${classes.control} ${
    formInputValidity.note ? "" : classes.invalid
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
      <div className={addressControlClasses}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={inputAddressRef} />
        {!formInputValidity.address && <p>Please enter a valid address!</p>}
      </div>
      <div className={phoneControlClasses}>
        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" ref={inputPhoneRef} />
        {!formInputValidity.phone && <p>Please enter a valid phone number!</p>}
      </div>
      <div className={noteControlClasses}>
        <label htmlFor="notation">Notation</label>
        <textarea id="notation" maxlength='100' ref={inputNoteRef} />
        {!formInputValidity.note && <p>Please enter a valid notation!</p>}
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
