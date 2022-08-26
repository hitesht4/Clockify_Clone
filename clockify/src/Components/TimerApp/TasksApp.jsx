import React from 'react';
import TaskInput from './TaskInput';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import TaskComponent from './TaskComponent';
import Heading from './Heading';
import { getTasksApi } from '../../Redux/Tasks/Task.actions';
import styles from './Styles/TaskApp.module.css';
import EmptyTask from './EmptyTask';

const TasksApp = () => {

   const {tasks,loading,error}=useSelector((state)=>state.tasks);
   const dispatch=useDispatch();

 useEffect(()=>{
   dispatch(getTasksApi());
 },[]);

 if(loading){
  return (
  <div className={styles.Body1}>
    <TaskInput/>
    <h1 className={styles.Load}>Loading....</h1>
  </div>
  )
 }
  else if(error){
    return (
    <div className={styles.Body1}>
      <TaskInput/>
      <h1 className={styles.Load2}>Error....</h1>
    </div>
    )

  
 }else{
  return (
    <div className={styles.Body1}>
      <TaskInput/>
    {tasks.length<=0 ?
    <div><EmptyTask/></div>:
    <div >
    <Heading/>
    {tasks.map(item=>(
       <TaskComponent key={item.id} item={item}/>
    ))}
    </div>}
   </div>
  )
}
}

export default TasksApp