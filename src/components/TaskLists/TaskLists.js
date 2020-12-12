import classes from "./TaskLists.module.css";
import TaskList from "./TaskList/TaskList";
import AddButton from "../UI/AddButton/AddButton";
import Modal from "../UI/Modal/Modal";
import { useState } from "react";

const TaskLists = (props) => {
  const [showModal, setShowModal] = useState(false);

  const addTaskListHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className={classes.TaskLists}>
      <Modal show={showModal} modalClosed={closeModalHandler}>
        {/* <p>New List</p> */}
        <input
          className={classes.ModalNewListInput}
          type="text"
          placeholder="New List"
        />
        <AddButton style={{ marginLeft: "auto" }} />
      </Modal>
      <TaskList />
      {/* <TaskList />
      <TaskList />
      <TaskList />
      <TaskList />
      <TaskList />
      <TaskList />
      <TaskList /> */}
      <AddButton
        style={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
          width: "50px",
          height: "50px",
        }}
        fontSize="large"
        clicked={addTaskListHandler}
      />
    </div>
  );
};

export default TaskLists;
