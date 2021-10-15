import React from "react";
import { Route } from "react-router-dom";

function PrivateRoute() {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute
