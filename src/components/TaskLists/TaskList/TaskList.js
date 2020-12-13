import { useState } from "react";
import { connect } from "react-redux";
import AddButton from "../../UI/AddButton/AddButton";
import Task from "./Task/Task";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import classes from "./TaskList.module.css";
import * as actions from "../../../store/actions/index";

const TaskList = (props) => {
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [newTaskInput, setNewTaskInput] = useState("");

  const onCheckedHandler = (taskNo) => {
    props.onTaskChecked(taskNo, props.id);
  };

  const editTaskHandler = () => {
    setShowEditMenu(true);
  };

  const closeModal = () => {
    setShowEditMenu(false);
  };

  const inputChangedHandler = (event) => {
    setNewTaskInput(event.target.value);
  };

  const taskTitleChangedHandler = (event, taskNo) => {
    props.onTaskTitleChanged(props.id, taskNo, event.target.value);
  };

  const taskDetailsChangedHandler = (event, taskNo) => {
    props.onTaskDetailsChanged(props.id, taskNo, event.target.value);
  };

  const taskDateChangedHandler = (event, taskNo) => {
    props.onTaskDateChanged(props.id, taskNo, event.target.value);
  };

  const addNewTaskHandler = () => {
    if (newTaskInput === "") {
      return;
    }
    props.onAddTask(newTaskInput, props.id);
    setNewTaskInput("");
  };

  const deleteTaskHandler = (taskNo) => {
    props.onDeleteTask(props.id, taskNo);
    setShowEditMenu(false);
  };

  return (
    <div className={classes.TaskList}>
      <div className={classes.FirstRow}>
        <span style={{ fontWeight: "700" }}>
          {props.taskLists[props.id].title}
        </span>
        <span className={classes.DeleteTaskList} onClick={props.onDelete}>
          <DeleteOutlineIcon />
        </span>
      </div>
      <div className={classes.SecondRow}>
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            width: "100%",
          }}
        >
          <AddButton
            fontSize="default"
            style={{
              width: "43px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            clicked={addNewTaskHandler}
          />
          <input
            type="text"
            placeholder="New Task"
            className={classes.NewTaskInput}
            onChange={inputChangedHandler}
            value={newTaskInput}
          />
        </div>
        {props.completedTasks ? (
          <p style={{ color: "#007500", alignSelf: "end", margin: "10px 0" }}>
            Completed ({props.completedTasks})
          </p>
        ) : null}
        {props.taskLists[props.id].tasks.map((task, index) => {
          return (
            <Task
              key={`TaskList${props.id}Task${index}`}
              id={index}
              label={task.title}
              content={task.details}
              date={task.date}
              clicked={() => onCheckedHandler(index)}
              titleChanged={(event) => taskTitleChangedHandler(event, index)}
              detailsChanged={(event) =>
                taskDetailsChangedHandler(event, index)
              }
              DateChanged={(event) => taskDateChangedHandler(event, index)}
              delete={() => deleteTaskHandler(index)}
              checked={props.taskLists[props.id].tasks[index].completed}
              edit={editTaskHandler}
              showEdit={showEditMenu}
              closeModal={closeModal}
            />
          );
        })}
      </div>
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
    onAddTask: (title, listNo) => dispatch(actions.addNewTask(title, listNo)),
    onTaskChecked: (taskNo, listNo) =>
      dispatch(actions.toggleCompletedTask(taskNo, listNo)),
    onTaskTitleChanged: (listNo, taskNo, newVal) =>
      dispatch(actions.updateTaskName(listNo, taskNo, newVal)),
    onTaskDetailsChanged: (listNo, taskNo, newVal) =>
      dispatch(actions.updateTaskDetails(listNo, taskNo, newVal)),
    onTaskDateChanged: (listNo, taskNo, newVal) =>
      dispatch(actions.updateTaskDate(listNo, taskNo, newVal)),
    onDeleteTask: (listNo, taskNo) =>
      dispatch(actions.deleteTask(listNo, taskNo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
