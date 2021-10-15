import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import styled from "styled-components";
import Header from "./Header";
import LambdaHeader from "./LambdaHeader";
import View from "./View";
import Login from "./Login";
import Logout from "./Logout";
import ContextObject from "../context/context";

const App = () => {
  const initialState = { token: "" };
  const [stateGlobal, set_stateGlobal] = useState(initialState);
  const cb_setToken = (input_token) => {
    set_stateGlobal({ ...stateGlobal, token: input_token });
  };
  const cb_hasToken = () => {
    console.log("token = ", cb_getToken());
    console.log("return = ", stateGlobal.token !== "");
    return stateGlobal.token !== "";
  };
  const cb_getToken = () => {
    return stateGlobal.token;
  };
  return (
    <AppContainer>
      <ContextObject.Provider value={{ cb_getToken, cb_setToken, cb_hasToken }}>
        <LambdaHeader />
        <Header />
        <RouteContainer>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/view">
              <View />
            </PrivateRoute>
            <PrivateRoute path="/logout">
              <Logout />
            </PrivateRoute>
          </Switch>
        </RouteContainer>
      </ContextObject.Provider>
    </AppContainer>
  );
};

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'

const AppContainer = styled.div`
  height: 100%;
`;
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`;
