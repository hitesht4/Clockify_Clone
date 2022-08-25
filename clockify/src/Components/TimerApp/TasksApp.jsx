import React, { useState } from 'react'
import TaskInput from './TaskInput';
import axios from 'axios';
import { useEffect } from 'react';
import TaskComponent from './TaskComponent';
import Heading from './Heading';

const TasksApp = () => {
 const [tasks,setTasks]=useState([]);

 const getData=async()=>{
    let r=await axios.get("http://localhost:8080/tasks");
    setTasks([...r.data]);
 }

 useEffect(()=>{
       getData();
 },[]);

 
  return (
    <div>
    <TaskInput/>
    <Heading/>
    {tasks.map(item=>(
       <TaskComponent key={item.id} {...item}/>
    ))}
    </div>
  )
}

export default TasksApp