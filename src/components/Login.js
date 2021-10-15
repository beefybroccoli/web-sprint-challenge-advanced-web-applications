import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import loginService from "../services/loginServices";
import { useHistory } from "react-router-dom";
import ContextObject from "../context/context";

const Login = () => {
  const initialState = { username: "", password: "", error: "" };
  const [stateForm, set_stateForm] = useState(initialState);
  const cb_onChange = (event) => {
    set_stateForm({ ...stateForm, [event.target.name]: event.target.value });
  };
  const history = useHistory();
  const { cb_setToken, cb_getToken, cb_hasToken } = useContext(ContextObject);

  const cb_onSubmit = (event) => {
    event.preventDefault();
    loginService({
      username: stateForm.username,
      password: stateForm.password,
    })
      .then((res) => {
        cb_setToken(res.data.token);
        history.push("/view");
      })
      .catch((error) => {
        set_stateForm({ ...stateForm, error: JSON.stringify(error) });
      });
    set_stateForm(initialState);
  };

  useEffect(() => {
    set_stateForm({ ...stateForm, username: "Lambda", password: "School" });
  }, []);

  return (
    <ComponentContainer>
      <ModalContainer>
        <h1>Welcome to Blogger Pro</h1>
        <h2>Please enter your account information.</h2>
        <p>token = {cb_hasToken() ? cb_getToken() : "No Token"}</p>
        <form onSubmit={cb_onSubmit}>
          <Label>
            Username :
            <input
              name="username"
              id="username"
              type="text"
              value={stateForm.username}
              onChange={cb_onChange}
              autoFocus
            />
          </Label>
          <Label>
            Password :
            <input
              name="password"
              id="password"
              type="text"
              value={stateForm.password}
              onChange={cb_onChange}
            />
          </Label>
          <button id="submit">Submit</button>
        </form>
        <div>
          <p name="error" id="error">
            {stateForm.error}
          </p>
        </div>
      </ModalContainer>
    </ComponentContainer>
  );
};

export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
  height: 70%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ModalContainer = styled.div`
  width: 500px;
  background: white;
  padding: 2rem;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 1.5rem;
`;

const FormGroup = styled.form`
  padding: 1rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 1rem 0;
  width: 100%;
`;

const Button = styled.button`
  padding: 1rem;
  width: 100%;
`;
