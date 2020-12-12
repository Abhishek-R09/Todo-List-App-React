import classes from "./AddButton.module.css";
import AddIcon from "@material-ui/icons/Add";

const addButton = (props) => (
  <button
    className={classes.AddButton}
    style={props.style}
    onClick={props.clicked}
  >
    <AddIcon fontSize={props.fontSize} />
  </button>
);

export default addButton;
