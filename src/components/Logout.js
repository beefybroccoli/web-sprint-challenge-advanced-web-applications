import React, { useContext, useEffect } from "react";
import ContextObject from "../context/context";
import logoutService from "../services/logoutServices";

const Logout = () => {
  // const { cb_getToken, cb_setToken, cb_hasToken } = useContext(ContextObject);

  useEffect(() => {
    // logoutService(cb_getToken())
    logoutService(localStorage.getItem("token"))
      .then((res) => {
        // cb_setToken("");
        localStorage.setItem("token", "");
      })
      .catch((error) => {
        console.log("error = ", error);
      });
  }, []);

  return (
    <div>
      <p>
        token ={" "}
        {localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "No Token"}
      </p>
    </div>
  );
};

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.
