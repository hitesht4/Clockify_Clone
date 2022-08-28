import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GrAddCircle} from 'react-icons/gr';
import {BsFillTagsFill} from 'react-icons/bs';
import {FiDollarSign} from 'react-icons/fi';
import styles from './Styles/TaskInput.module.css';
import useTimer from './useTimer';

import useDateHook from './useDateHook';
// import { postTasksApi, startTask } from '../../Redux/Tasks/Task.actions';
import useTime from './useTime';



import { createGoal, startt } from "../../features/goals/goalsSlice"



const TaskInput = () => {
    const {timerOn,sec,min,hrs,handleTimer}=useTimer();
    const {hours,minutes,seconds,day}=useDateHook();
    const {hours2,minutes2,seconds2}=useTime();
    const [name,setName]=useState("");
    const {start}=useSelector((state)=>state.goal);
    const dispatch=useDispatch();
    

   
const handleSubmit=()=>{ 
    if(timerOn){
        let taskObj={
            text:name||"Task",
            status:false,
            start:start,
            end:`${hours2}:${minutes2}:${seconds2}`
        }
        dispatch(createGoal(taskObj));
        handleTimer();
    }
    else{  
        handleTimer(); 
        dispatch(startt(`${hours}:${minutes}:${seconds}`)); 
    }  
    }
  return (
        <div className={styles.Task}>
       <div className={styles.Desc}>
            <input type="text" placeholder='What Are You Working On' onChange={(e)=>setName(e.target.value)}/>
            <div className={styles.Projects}>
            <GrAddCircle style={{fontSize:"20px",color:"#1cb9f7"}}/>
                <h6>Project</h6>
            </div>
            <div className={styles.Tags}>
                <BsFillTagsFill style={{fontSize:"22px"}}/>
            </div>
            <div className={styles.Tags}>
                <FiDollarSign style={{fontSize:"22px"}}/>
            </div>
            <div className={styles.Timer}>
                <h6>{hrs<10 ? "0" + hrs : hrs}:{min<10 ? "0" + min : min}:{sec<10 ? "0" + sec : sec}</h6>
                <button className={timerOn?styles.Red:styles.Blue} onClick={handleSubmit}>{timerOn ? "Stop":"Start"}</button> 
            </div>            
       </div>
    </div>
  )
}

export default TaskInput;