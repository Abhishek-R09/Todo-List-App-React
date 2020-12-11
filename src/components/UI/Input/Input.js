import classes from "./Input.module.css";

const input = (props) => {
  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      <br />
      <input type={props.type} placeholder={props.ph} />
    </div>
  );
};

export default input;
