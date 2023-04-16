import {
  DeleteTasksSUCCESS,
  GetTasksERROR,
  GetTasksLOADING,
  GetTasksSUCCESS,
  PostTasksSUCCESS,
  start,
  UpdateTasksSUCCESS,
} from "./Task.types";
import axios from "axios";

const API_URL = `https://clcok2.onrender.com/api/goals/`;

export const startTask = (payload) => (dispatch) => {
  dispatch({ type: start, payload: payload });
};
export const getTasksApi = (token) => async (dispatch) => {
  dispatch({
    type: GetTasksLOADING,
  });
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(API_URL, config);
    dispatch({
      type: GetTasksSUCCESS,
      payload: data,
    });
    return data;
  } catch (e) {
    dispatch({
      type: GetTasksERROR,
    });
  }
};
export const postTasksApi = (item, token) => async (dispatch) => {
  dispatch({ type: GetTasksLOADING });
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(API_URL, item, config);
    dispatch({ type: PostTasksSUCCESS, payload: data });
    return data;
  } catch (e) {
    dispatch({ type: GetTasksERROR });
  }
};
export const deleteTasksApi = (id, token) => async (dispatch) => {
  dispatch({
    type: GetTasksLOADING,
  });
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(API_URL + id, config);
    dispatch({ type: DeleteTasksSUCCESS, payload: id });
  } catch (e) {
    dispatch({
      type: GetTasksERROR,
    });
  }
};
export const updateTasksApi = (task, token) => async (dispatch) => {
  dispatch({
    type: GetTasksLOADING,
  });
  try {
    const { _id } = task;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(API_URL + _id, task, config);
    dispatch({ type: UpdateTasksSUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: GetTasksERROR,
    });
  }
};
