import {
  DeleteTasksSUCCESS,
  GetTasksERROR,
  GetTasksLOADING,
  GetTasksSUCCESS,
  PostTasksSUCCESS,
  start,
  UpdateTasksSUCCESS,
} from "./Task.types";

const initialstate = {
  tasks: [],
  start: "",
  isLoading: false,
  isError: false,
};
export const TaskReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case start: {
      return { ...state, start: payload };
    }
    case GetTasksLOADING: {
      return { ...state, isLoading: true };
    }
    case GetTasksERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case GetTasksSUCCESS: {
      return { ...state, tasks: payload, isLoading: false };
    }
    case PostTasksSUCCESS: {
      return { ...state, tasks: [...state.tasks, payload], isLoading: false };
    }
    case DeleteTasksSUCCESS: {
      let filtered = state.tasks.filter((item) => {
        return item._id !== payload;
      });
      return { ...state, tasks: [...filtered], isLoading: false };
    }
    case UpdateTasksSUCCESS: {
      let updated = state.tasks.map((task) => {
        if (task._id === payload._id) {
          return { ...payload };
        } else {
          return task;
        }
      });
      return { ...state, tasks: [...updated], isLoading: false };
    }
    default: {
      return state;
    }
  }
};
