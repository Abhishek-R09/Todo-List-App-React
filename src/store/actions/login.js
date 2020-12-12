import * as actionTypes from "./actionTypes";

export const loginSuccess = (email, password) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    email: email,
    password: password,
  };
};

export const loginFailure = (error) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    error: error,
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("isAuth", true);
    dispatch(loginSuccess(email, password));
  };
};
