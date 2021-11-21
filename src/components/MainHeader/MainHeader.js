import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Expense Manager</h1>
      <Navigation isLoggedIn={props.isAuthenticated} />
    </header>
  );
};

export default MainHeader;
