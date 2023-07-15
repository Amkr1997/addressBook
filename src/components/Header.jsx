import React from "react";
import classes from "./CSS/Header.module.css";

const Header = () => {
  return (
    <div className={``}>
      <h1 className={`${classes.heading} text-capitalize`}>address book</h1>
      <p className={`${classes.addressTag}`}>━ keep you contacts in order ━</p>
    </div>
  );
};

export default Header;
