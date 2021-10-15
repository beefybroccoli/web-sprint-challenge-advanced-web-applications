import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import ContextObject from "../context/context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { cb_hasToken } = useContext(ContextObject);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (cb_hasToken()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute
