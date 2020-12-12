import classes from "./Checkbox.module.css";

const checkbox = (props) => (
  <label className={classes.container}>
    {props.label}
    <input type="checkbox" checked={props.checked} onChange={props.changed} />
    <span
      className={classes.checkmark}
      style={{ border: props.valid ? "1px solid #dae0ea" : "1px solid red" }}
    ></span>
  </label>
);

export default checkbox;
