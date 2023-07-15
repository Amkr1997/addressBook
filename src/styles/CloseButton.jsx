import React from "react";
import classes from "./CloseButton.module.css";

const CloseButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className={`btn btn-warning active ${classes.closeBtn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CloseButton;
