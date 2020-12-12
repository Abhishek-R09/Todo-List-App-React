import React from "react";
import classes from "./Task.module.css";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "../../../UI/Modal/Modal";

const Task = (props) => {
  let taskClasses = [classes.checkbox];
  if (props.checked) {
    taskClasses.push(classes.checked);
  }

  const modalChildren = (
    <div className={classes.modalChildren}>
      <div>
        <DeleteOutlineIcon />
        <CloseIcon />
      </div>
      <p>Campus Build</p>
      <textarea placeholder="Add details"></textarea>

      <p>Add Date</p>
      <p>Move to another list</p>
    </div>
  );
  return (
    <div className={classes.Task}>
      <Modal show={props.showEdit} modalClosed={props.closeModal}>
        {modalChildren}
      </Modal>
      <div className={taskClasses.join(" ")} onClick={props.clicked}>
        {props.checked ? <DoneIcon /> : null}
      </div>
      <span style={{ color: props.checked ? "#007500" : null }}>
        Campus Build
      </span>
      {!props.checked ? (
        <div
          style={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={props.edit}
        >
          <EditIcon />
        </div>
      ) : null}
    </div>
  );
};

export default Task;
