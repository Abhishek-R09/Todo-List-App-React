import classes from "./FormButton.module.css";

const formButton = (props) => (
  <button
    disabled={props.disabled}
    className={classes.FormButton}
    type="submit"
  >
    {props.btnTxt}
  </button>
);

export default formButton;
