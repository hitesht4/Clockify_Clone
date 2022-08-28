import React from 'react';
import TaskInput from './TaskInput';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import TaskComponent from './TaskComponent';
import Heading from './Heading';

import styles from './Styles/TaskApp.module.css';
import EmptyTask from './EmptyTask';
import { getGoals} from '../../features/goals/goalsSlice';
import {reset} from "../../features/auth/authSlice"
import { useNavigate } from 'react-router-dom';
import Spinner  from '../Spinner.jsx/Spinner';


const TasksApp = () => {


   const dispatch=useDispatch();
const navigate=useNavigate()
   const {goals,isLoading,isError,message}=useSelector(state=>state.goal)
   const {user}=useSelector(state=>state.auth)

 useEffect(()=>{
   if(isError){
     console.log(message)
   }
 if(!user){
   navigate("/login")
 }

 if(user){
  dispatch(getGoals())
 }
  
 
 

 


  
 
 },[user,navigate,isError,message,dispatch])

 if(isLoading){
  return (
  <div className={styles.Body1}>
    <TaskInput/>
    <h1 className={styles.Load1}><Spinner/></h1>
  </div>
  )
 }
 else{
  return (
    <div className={styles.Body1}>
      <TaskInput/>
    {goals.length<=0 ?
    <div><EmptyTask/></div>:
    <div >
    <Heading/>
    {goals.map(item=>(
       <TaskComponent key={item._id} item={item}/>
    ))}
    </div>}
   </div>
  )
}
}

export default TasksApp