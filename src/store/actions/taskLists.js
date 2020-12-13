import * as actionTypes from "./actionTypes";

export const addNewTaskList = (title) => {
  return { type: actionTypes.ADD_TASK_LIST, title: title };
};

export const deleteTaskList = (index) => {
  return { type: actionTypes.DELETE_TASK_LIST, index: index };
};

export const addNewTask = (title, listNo) => {
  return { type: actionTypes.ADD_TASK, title: title, listNo: listNo };
};

export const toggleCompletedTask = (taskNo, listNo) => {
  return { type: actionTypes.TOGGLE_COMPLETED_TASK, taskNo, listNo };
};

export const updateTaskName = (listNo, taskNo, newVal) => {
  return {
    type: actionTypes.UPDATE_TASK_NAME,
    listNo: listNo,
    taskNo: taskNo,
    newVal: newVal,
  };
};

export const updateTaskDetails = (listNo, taskNo, newVal) => {
  return {
    type: actionTypes.UPDATE_TASK_DETAILS,
    listNo: listNo,
    taskNo: taskNo,
    newVal: newVal,
  };
};

export const updateTaskDate = (listNo, taskNo, newVal) => {
  return {
    type: actionTypes.UPDATE_TASK_DATE,
    listNo: listNo,
    taskNo: taskNo,
    newVal: newVal,
  };
};

export const deleteTask = (listNo, taskNo) => {
  return {
    type: actionTypes.DELETE_TASK,
    listNo: listNo,
    taskNo: taskNo,
  };
};
