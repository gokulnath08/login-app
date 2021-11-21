import React from "react";
import AuthContext from "../../Context/AuthContext";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const context = React.useContext(AuthContext);
  return (
    //<AuthContext.Consumer>
    //  {(context) => {
    //    return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
  // }}
  // </AuthContext.Consumer>
  //);
};

export default Navigation;
