import { DeleteTasksSUCCESS, end, GetTasksERROR, GetTasksLOADING, GetTasksSUCCESS, PostTasksSUCCESS, start, UpdateTasksSUCCESS } from "./Task.types";
import axios from 'axios';


export const startTask=(payload)=>(dispatch)=>{
   dispatch({type:start,payload:payload});
}
export const getTasksApi=()=>async(dispatch)=>{
   dispatch({
    type:GetTasksLOADING,
   })
   try{
      let r=await axios.get(`http://localhost:8080/tasks`);
         dispatch({
            type:GetTasksSUCCESS,
            payload:r.data,
         })
   return r.data;
   }catch(e){
    dispatch({
      type:GetTasksERROR,
   }) 
   }
}

export const postTasksApi=(item)=>async(dispatch)=>{
    dispatch({type:GetTasksLOADING});
   try{
     let r=await axios.post("http://localhost:8080/tasks",item);
     dispatch({type:PostTasksSUCCESS,payload:r.data});
   }
   catch(e){
      dispatch({type:GetTasksERROR});
   }
}

export const deleteTasksApi=(id)=>async(dispatch)=>{
   dispatch({
    type:GetTasksLOADING,
   })
   try{
    await axios.delete(`http://localhost:8080/tasks/${id}`);
    dispatch({type:DeleteTasksSUCCESS,payload:id});
   }catch(e){
          dispatch({
      type:GetTasksERROR,
   }) 
   }
}

export const updateTasksApi=(id,task)=>async(dispatch)=>{
   dispatch({
    type:GetTasksLOADING,
   })
   try{
    let r=await axios.patch(`http://localhost:8080/tasks/${id}`,{status:!task.status});
    console.log(r.data);
    dispatch({type:UpdateTasksSUCCESS,payload:r.data});
   }catch(e){
          dispatch({
      type:GetTasksERROR,
   }) 
   }
}  

export const updateTaskNameApi=(id,payload)=>async(dispatch)=>{
   dispatch({
    type:GetTasksLOADING,
   })
   try{
    let r=await axios.patch(`http://localhost:8080/tasks/${id}`,{name:payload});
    dispatch({type:UpdateTasksSUCCESS,payload:r.data});
   }catch(e){
          dispatch({
      type:GetTasksERROR,
   }) 
   }
}  