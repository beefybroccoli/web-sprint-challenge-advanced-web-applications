import React, { useEffect } from "react";
import logoutService from "../services/logoutServices";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    logoutService(localStorage.getItem("token"))
      .then((res) => {
        localStorage.setItem("token", "");
        history.push("/");
      })
      .catch((error) => {
        console.log("error = ", error);
      });
  }, []);

  return <div></div>;
};

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.
