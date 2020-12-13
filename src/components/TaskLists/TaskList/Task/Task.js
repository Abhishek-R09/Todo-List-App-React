import React, { useState } from "react";
import classes from "./Task.module.css";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "../../../UI/Modal/Modal";

const Task = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  let taskClasses = [classes.checkbox];
  if (props.checked) {
    taskClasses.push(classes.checked);
  }

  const modalChildren = (
    <div className={classes.modalChildren}>
      <div>
        <span className={classes.CloseIcon} onClick={props.delete}>
          <DeleteOutlineIcon />
        </span>
        <span className={classes.CloseIcon} onClick={props.closeModal}>
          <CloseIcon />
        </span>
      </div>
      {/* <p>Campus Build</p> */}
      <input type="text" value={props.label} onChange={props.titleChanged} />
      <textarea
        placeholder="Add details"
        value={props.content}
        onChange={props.detailsChanged}
      ></textarea>
      <input type="date" placeholder="Add Date" onChange={props.DateChanged} />
    </div>
  );

  const showDetailsHandler = () => {
    setShowDetails((prevState) => !prevState);
  };
  return (
    <div className={classes.Task}>
      <Modal show={props.showEdit} modalClosed={props.closeModal}>
        {modalChildren}
      </Modal>
      <div className={taskClasses.join(" ")} onClick={props.clicked}>
        {props.checked ? <DoneIcon /> : null}
      </div>
      <div style={{ flexDirection: "column", display: "flex", width: "100%" }}>
        <div style={{ display: "flex", width: "100%" }}>
          <span
            style={{ color: props.checked ? "#007500" : null }}
            onClick={showDetailsHandler}
            className={classes.TaskName}
          >
            {props.label}
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
        {showDetails && !props.checked ? (
          <div style={{ fontSize: "12px" }}>
            <p>{props.content}</p>
            <p className={classes.TaskDate}>{props.date}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Task;
