import { useState } from "react";
import AddButton from "../../UI/AddButton/AddButton";
import Task from "./Task/Task";
import classes from "./TaskList.module.css";

const TaskList = (props) => {
  const [checked, setChecked] = useState(false);
  const [showEditMenu, setShowEditMenu] = useState(false);

  const onCheckedHandler = () => {
    setChecked((prevState) => !prevState);
  };

  const editTaskHandler = () => {
    setShowEditMenu(true);
  };

  const closeModal = () => {
    setShowEditMenu(false);
  };

  return (
    <div className={classes.TaskList}>
      <div className={classes.FirstRow}>
        <span style={{ fontWeight: "700" }}>My Tasks</span>
        <span style={{ fontSize: "25px", fontWeight: "bold" }}>&#x22EE;</span>
      </div>
      <div className={classes.SecondRow}>
        {/* <span style={{ fontWeight: "300", color: "#BDE0F7" }}>New Task</span> */}
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            // justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <AddButton
            fontSize="default"
            style={{
              width: "35px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <input
            // style={{ fontWeight: "300", color: "#BDE0F7" }}
            type="text"
            placeholder="New Task"
            className={classes.NewTaskInput}
          />
        </div>

        <Task
          label="Campus Build"
          clicked={onCheckedHandler}
          checked={checked}
          edit={editTaskHandler}
          showEdit={showEditMenu}
          closeModal={closeModal}
        />
        <Task label="Campus Build" />
        {/* <AddButton
          fontSize="default"
          style={{ width: "35px", height: "35px" }}
        /> */}
      </div>
    </div>
  );
};

export default TaskList;
