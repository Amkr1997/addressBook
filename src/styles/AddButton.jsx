import React from "react";
import classes from "./AddButton.module.css";

const AddButton = ({ children, onClick }) => {
  return (
    <button
      type="submit"
      className={`btn btn-warning active ${classes.addBtn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AddButton;
