import classes from "./TaskLists.module.css";
import TaskList from "./TaskList/TaskList";
import AddButton from "../UI/AddButton/AddButton";
import Modal from "../UI/Modal/Modal";
import { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const TaskLists = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [inputTaskList, setInputTaskList] = useState("");

  const addTaskListHandler = () => {
    setShowModal(true);
  };

  const inputChangedHandler = (event) => {
    setInputTaskList(event.target.value);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const addNewTaskListHandler = () => {
    if (inputTaskList === "") {
      return;
    }
    props.onAddTaskList(inputTaskList);
    setShowModal(false);
    setInputTaskList("");
  };

  const deleteTaskHandler = (index) => {
    props.onTaskListDelete(index);
  };

  return (
    <div className={classes.TaskLists}>
      <Modal show={showModal} modalClosed={closeModalHandler}>
        {/* <p>New List</p> */}
        <input
          className={classes.ModalNewListInput}
          type="text"
          placeholder="New List"
          onChange={inputChangedHandler}
          value={inputTaskList}
        />
        <AddButton
          style={{ marginLeft: "auto" }}
          clicked={addNewTaskListHandler}
        />
      </Modal>
      {props.taskLists.map((taskList, index) => {
        return (
          <TaskList
            key={`TaskList${index}`}
            id={index}
            completedTasks={taskList.totalCompletedTasks}
            onDelete={() => deleteTaskHandler(index)}
          />
        );
      })}
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

const mapStateToProps = (state) => {
  return {
    taskLists: state.tasks.taskLists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTaskList: (title) => dispatch(actions.addNewTaskList(title)),
    onTaskListDelete: (index) => dispatch(actions.deleteTaskList(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskLists);
