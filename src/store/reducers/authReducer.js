import * as actionTypes from "../actions/actionTypes";

const initialState = {
  username: null,
  email: null,
  password: null,
  error: false,
  isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        email: action.email,
        password: action.password,
        error: false,
        isAuthenticated: true,
      };
    case actionTypes.LOGIN_FAILURE:
      return { ...state, error: action.error, isAuthenticated: false };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        username: action.username,
        email: action.email,
        password: action.password,
        error: false,
        isAuthenticated: true,
      };
    case actionTypes.SIGNUP_FAILURE:
      return { ...state, error: action.error, isAuthenticated: false };
    case actionTypes.LOGOUT:
      return {
        ...state,
        username: null,
        email: null,
        password: null,
        error: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default reducer;
