import * as actionTypes from "./actionTypes";

export const authSuccess = (email, password) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    email: email,
    password: password,
  };
};

export const logout = () => {
  localStorage.removeItem("isAuth");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.removeItem("username");
  return {
    type: actionTypes.LOGOUT,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const isAuth = localStorage.getItem("isAuth");
    if (!isAuth) {
      dispatch(logout);
    } else {
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");
      dispatch(authSuccess(email, password));
    }
  };
};
