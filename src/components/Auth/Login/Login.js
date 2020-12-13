import Input from "../../UI/Input/Input";
import classes from "./Login.module.css";
import Checkbox from "../../UI/Checkbox/Checkbox";
import FormButton from "../../UI/FormButton/FormButton";
import { checkValidity } from "../../../utility";
import { useState, useEffect } from "react";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [inputEmail, setInputEmail] = useState({
    value: "",
    validation: {
      required: true,
      emailRegex: true,
    },
    valid: false,
    touched: false,
  });
  const [inputPassword, setInputPassword] = useState({
    value: "",
    validation: {
      required: true,
      minLength: 8,
      maxLength: 16,
    },
    valid: false,
    touched: false,
  });
  const [inputCheckbox, setInputCheckbox] = useState(true);

  useEffect(() => {
    let formValidation = true;
    formValidation = inputEmail.valid && formValidation;
    formValidation = inputPassword.valid && formValidation;
    setFormIsValid(formValidation);
  }, [inputEmail, inputPassword]);

  const inputChangedHandler = (event, type) => {
    switch (type) {
      case "email":
        setInputEmail((prevState) => ({
          ...prevState,
          value: event.target.value,
          valid: checkValidity(event.target.value, inputEmail.validation),
          touched: true,
        }));
        break;
      case "password":
        setInputPassword((prevState) => ({
          ...prevState,
          value: event.target.value,
          valid: checkValidity(event.target.value, inputPassword.validation),
          touched: true,
        }));
        break;
      default:
        break;
    }
  };

  const checkboxHandler = () => {
    setInputCheckbox((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onLogin(inputEmail.value, inputPassword.value);

    props.history.replace("/");
  };

  return (
    <div className={classes.Login}>
      {props.isAuthenticated ? <Redirect to="/" /> : null}
      <h1 style={{ padding: "0", margin: "20px" }}>Log in!</h1>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          ph="Enter Email"
          label="Email Address"
          changed={(event) => inputChangedHandler(event, "email")}
          value={inputEmail.value}
          invalid={!inputEmail.valid}
          touched={inputEmail.touched}
        />
        <Input
          type="password"
          ph="Enter Password"
          label="Password"
          changed={(event) => inputChangedHandler(event, "password")}
          value={inputPassword.value}
          invalid={!inputPassword.valid}
          touched={inputPassword.touched}
        />
        <div style={{ marginBottom: "16px" }}>
          <Checkbox
            label="Remember Me"
            checked={inputCheckbox}
            valid={true}
            changed={checkboxHandler}
          />
          <span className={classes.forgotPass}>Forgot Password?</span>
        </div>
        {/* <button type="submit">Log in</button> */}
        <FormButton btnTxt="Log in" disabled={!formIsValid} />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(actions.login(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
