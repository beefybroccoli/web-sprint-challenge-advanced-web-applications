import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import ContextObject from "../context/context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { cb_hasToken } = useContext(ContextObject);

  console.log("privateRoute - cb_hasToken return ", cb_hasToken());

  return (
    <Route
      {...rest}
      render={(props) => {
        if (cb_hasToken()) {
          console.log("inside true case");
          return <Component {...props} />;
        } else {
          console.log("inside false case");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute

/*
<Route
      {...rest}
      render={(props) =>
        cb_hasToken() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
*/
