import classes from "./Input.module.css";

const input = (props) => {
  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      <br />
      <input
        type={props.type}
        placeholder={props.ph}
        onChange={props.changed}
        value={props.value}
        style={{
          border: props.invalid && props.touched ? "1px solid red" : null,
        }}
      />
    </div>
  );
};

export default input;
