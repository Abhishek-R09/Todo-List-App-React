import classes from "./Signup.module.css";
import Input from "../../UI/Input/Input";
import Checkbox from "../../UI/Checkbox/Checkbox";
import FormButton from "../../UI/FormButton/FormButton";
import { checkValidity } from "../../../utility";
import * as actions from "../../../store/actions/index";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Signup = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [inputUsername, setInputUsername] = useState({
    value: "",
    validation: {
      required: true,
      minLength: 5,
    },
    valid: false,
    touched: false,
  });
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
    formValidation = inputUsername.valid && formValidation;
    formValidation = inputCheckbox && formValidation;
    setFormIsValid(formValidation);
  }, [inputUsername, inputEmail, inputPassword, inputCheckbox]);

  const inputChangedHandler = (event, type) => {
    switch (type) {
      case "username":
        setInputUsername((prevState) => ({
          ...prevState,
          value: event.target.value,
          valid: checkValidity(event.target.value, inputUsername.validation),
          touched: true,
        }));
        break;
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
    console.log("submitted");
    props.onSignup(inputUsername.value, inputEmail.value, inputPassword.value);
  };

  return (
    <div className={classes.Signup}>
      {props.isAuthenticated ? <Redirect to="/" /> : null}
      <h1 style={{ padding: "0", margin: "20px" }}>Sign up</h1>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          ph="Enter name"
          label="Username"
          changed={(event) => inputChangedHandler(event, "username")}
          value={inputUsername.value}
          invalid={!inputUsername.valid}
          touched={inputUsername.touched}
        />
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
            label="I accept the terms and conditions"
            checked={inputCheckbox}
            valid={inputCheckbox}
            changed={checkboxHandler}
          />
        </div>
        {/* <button type="submit">Log in</button> */}
        <FormButton btnTxt="Sign up" disabled={!formIsValid} />
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
    onSignup: (username, email, password) =>
      dispatch(actions.signup(username, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
