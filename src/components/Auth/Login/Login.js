import Input from "../../UI/Input/Input";
import classes from "./Login.module.css";
import Checkbox from "../../UI/Checkbox/Checkbox";
import FormButton from "../../UI/FormButton/FormButton";

const login = (props) => {
  return (
    <div className={classes.Login}>
      <h1 style={{ padding: "0", margin: "20px" }}>Log in!</h1>
      <form>
        <Input type="email" ph="Enter Email" label="Email Address" />
        <Input type="password" ph="Enter Password" label="Password" />
        <div style={{ marginBottom: "16px" }}>
          <Checkbox label="Remember Me" />
          <span className={classes.forgotPass}>Forgot Password?</span>
        </div>
        {/* <button type="submit">Log in</button> */}
        <FormButton btnTxt="Log in" />
      </form>
    </div>
  );
};

export default login;
