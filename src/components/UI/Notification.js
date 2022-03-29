import React from "react";
import classes from "./Notification.module.css";

const Notification = (props) => {
  let specialClassses = "";

  if (props.status === "error") {
    specialClassses = classes.error;
  }
  if (props.status === "success") {
    specialClassses = classes.success;
  }
  const cssClasses = `${classes.notification} ${specialClassses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
