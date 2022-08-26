import React from 'react';
import TaskInput from './TaskInput';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import TaskComponent from './TaskComponent';
import Heading from './Heading';
import { getTasksApi } from '../../Redux/Tasks/Task.actions';

const TasksApp = () => {

   const {tasks}=useSelector((state)=>state.tasks);
   const dispatch=useDispatch();

 useEffect(()=>{
   dispatch(getTasksApi());
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