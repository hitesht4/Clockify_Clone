import React from "react";
import TaskInput from "./TaskInput";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskComponent from "./TaskComponent";
import Heading from "./Heading";
import styles from "./Styles/TaskApp.module.css";
import EmptyTask from "./EmptyTask";
import { useNavigate } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { getTasksApi } from "../../Redux/Tasks/Task.actions";

const TasksApp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tasks, isLoading } = useSelector((state) => state.tasks);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.token) {
      dispatch(getTasksApi(user.token));
    } else {
      navigate("/login");
    }
  }, [user, dispatch, navigate]);

  if (isLoading) {
    return (
      <div className={styles.Body1}>
        <TaskInput />
        <h1 className={styles.Load1}>
          <Spinner />
        </h1>
      </div>
    );
  } else {
    return (
      <div className={styles.Body1}>
        <TaskInput />
        {tasks.length <= 0 ? (
          <div>
            <EmptyTask />
          </div>
        ) : (
          <div>
            <Heading />
            {tasks.map((item) => (
              <TaskComponent key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    );
  }
};

export default TasksApp;
