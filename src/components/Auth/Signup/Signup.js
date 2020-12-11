import classes from "./Signup.module.css";
import Input from "../../UI/Input/Input";
import Checkbox from "../../UI/Checkbox/Checkbox";
import FormButton from "../../UI/FormButton/FormButton";

const signup = (props) => {
  return (
    <div className={classes.Signup}>
      <h1 style={{ padding: "0", margin: "20px" }}>Sign up</h1>
      <form>
        <Input type="text" ph="Enter name" label="Username" />
        <Input type="email" ph="Enter Email" label="Email Address" />
        <Input type="password" ph="Enter Password" label="Password" />
        <div style={{ marginBottom: "16px" }}>
          <Checkbox label="I accept the terms and conditions" />
        </div>
        {/* <button type="submit">Log in</button> */}
        <FormButton btnTxt="Sign up" />
      </form>
    </div>
  );
};

export default signup;
