import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import AppExpense from "./AppExpense.js";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./Context/AuthContext";

function AppLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const LSloggedIn = localStorage.getItem("isLoggedIn");
    if (LSloggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}
    >
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <AppExpense onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default AppLogin;
