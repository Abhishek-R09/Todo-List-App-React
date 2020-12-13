import * as actionTypes from "../actions/actionTypes";

const initialState = {
  taskLists: [
    {
      title: "My Task",
      tasks: [
        {
          title: "Sample Task",
          details: "Lorem ipsum dolor",
          date: null,
          completed: false,
        },
      ],
      totalCompletedTasks: 0,
    },
  ],
};

const addTaskList = (state, action) => {
  const taskLists = [...state.taskLists];
  const updatedTaskLists = taskLists.concat({
    title: action.title,
    tasks: [],
  });
  return { ...state, taskLists: updatedTaskLists };
};

const deleteTaskList = (state, action) => {
  const currTaskLists = [...state.taskLists];
  const updatedTaskLists = currTaskLists.filter((taskList, index) => {
    return index !== action.index;
  });
  return { ...state, taskLists: updatedTaskLists };
};

const addTask = (state, action) => {
  const tasks = [...state.taskLists[action.listNo].tasks];
  const updatedTasks = tasks.concat({
    title: action.title,
    details: "",
    date: new Date().toLocaleDateString(),
  });
  const updatedTaskList = {
    ...state.taskLists[action.listNo],
    tasks: updatedTasks,
  };
  const updatedTaskLists = [...state.taskLists];
  updatedTaskLists[action.listNo] = updatedTaskList;
  return { ...state, taskLists: updatedTaskLists };
};

const toggleCompletedTask = (state, action) => {
  const updatedTask = {
    ...state.taskLists[action.listNo].tasks[action.taskNo],
    completed: !state.taskLists[action.listNo].tasks[action.taskNo].completed,
  };
  const tasks = [...state.taskLists[action.listNo].tasks];
  tasks[action.taskNo] = updatedTask;
  let updatedTaskList = {
    ...state.taskLists[action.listNo],
    tasks: tasks,
  };
  let numOfCompletedTasks = 0;
  updatedTaskList.tasks.forEach((task) => {
    if (task.completed) {
      numOfCompletedTasks += 1;
    }
  });
  updatedTaskList = {
    ...state.taskLists[action.listNo],
    tasks: tasks,
    totalCompletedTasks: numOfCompletedTasks,
  };
  const updatedTaskLists = [...state.taskLists];
  updatedTaskLists[action.listNo] = updatedTaskList;
  return { ...state, taskLists: updatedTaskLists };
};

const updateTaskName = (state, action) => {
  const updatedTask = {
    ...state.taskLists[action.listNo].tasks[action.taskNo],
    title: action.newVal,
  };
  const tasks = [...state.taskLists[action.listNo].tasks];
  tasks[action.taskNo] = updatedTask;
  const updatedTaskList = {
    ...state.taskLists[action.listNo],
    tasks: tasks,
  };
  const updatedTaskLists = [...state.taskLists];
  updatedTaskLists[action.listNo] = updatedTaskList;
  return { ...state, taskLists: updatedTaskLists };
};

const updateTaskDetails = (state, action) => {
  const updatedTask = {
    ...state.taskLists[action.listNo].tasks[action.taskNo],
    details: action.newVal,
  };
  const tasks = [...state.taskLists[action.listNo].tasks];
  tasks[action.taskNo] = updatedTask;
  const updatedTaskList = {
    ...state.taskLists[action.listNo],
    tasks: tasks,
  };
  const updatedTaskLists = [...state.taskLists];
  updatedTaskLists[action.listNo] = updatedTaskList;
  return { ...state, taskLists: updatedTaskLists };
};

const updateTaskDate = (state, action) => {
  const updatedTask = {
    ...state.taskLists[action.listNo].tasks[action.taskNo],
    date: action.newVal,
  };
  const tasks = [...state.taskLists[action.listNo].tasks];
  tasks[action.taskNo] = updatedTask;
  const updatedTaskList = {
    ...state.taskLists[action.listNo],
    tasks: tasks,
  };
  const updatedTaskLists = [...state.taskLists];
  updatedTaskLists[action.listNo] = updatedTaskList;
  return { ...state, taskLists: updatedTaskLists };
};

const deleteTask = (state, action) => {
  const tasks = [...state.taskLists[action.listNo].tasks];
  const updatedTasks = tasks.filter((task, index) => {
    return index !== action.taskNo;
  });
  let updatedTaskList = {
    ...state.taskLists[action.listNo],
    tasks: updatedTasks,
  };
  let numOfCompletedTasks = 0;
  updatedTaskList.tasks.forEach((task) => {
    if (task.completed) {
      numOfCompletedTasks += 1;
    }
  });
  updatedTaskList = {
    ...state.taskLists[action.listNo],
    tasks: updatedTasks,
    totalCompletedTasks: numOfCompletedTasks,
  };
  const updatedTaskLists = [...state.taskLists];
  updatedTaskLists[action.listNo] = updatedTaskList;
  return { ...state, taskLists: updatedTaskLists };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK_LIST:
      return addTaskList(state, action);
    case actionTypes.DELETE_TASK_LIST:
      return deleteTaskList(state, action);
    case actionTypes.ADD_TASK:
      return addTask(state, action);
    case actionTypes.TOGGLE_COMPLETED_TASK:
      return toggleCompletedTask(state, action);
    case actionTypes.UPDATE_TASK_NAME:
      return updateTaskName(state, action);
    case actionTypes.UPDATE_TASK_DETAILS:
      return updateTaskDetails(state, action);
    case actionTypes.UPDATE_TASK_DATE:
      return updateTaskDate(state, action);
    case actionTypes.DELETE_TASK:
      return deleteTask(state, action);
    default:
      return state;
  }
};

export default reducer;
