import classes from "./FormButton.module.css";

const formButton = (props) => (
  <button className={classes.FormButton}>{props.btnTxt}</button>
);

export default formButton;
