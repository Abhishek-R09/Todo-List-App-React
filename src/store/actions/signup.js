import * as actionTypes from "./actionTypes";

export const signupSuccess = (username, email, password) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    username: username,
    email: email,
    password: password,
  };
};

export const signupFailure = (error) => {
  return {
    type: actionTypes.SIGNUP_FAILURE,
    error: error,
  };
};

export const signup = (username, email, password) => {
  return (dispatch) => {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("isAuth", true);
    dispatch(signupSuccess(username, email, password));
  };
};
