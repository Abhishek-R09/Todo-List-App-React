import classes from "./Checkbox.module.css";

const checkbox = (props) => (
  <label className={classes.container}>
    {props.label}
    <input type="checkbox" />
    <span className={classes.checkmark}></span>
  </label>
);

export default checkbox;
