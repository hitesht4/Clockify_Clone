import { GetTasksERROR, GetTasksLOADING, GetTasksSUCCESS, PostTasksSUCCESS } from "./Task.types";
import axios from 'axios';

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

// export const deleteTodosApi=(id)=>async()=>{
//    try{
//     let r=await axios.delete(`http://localhost:8080/todos/${id}`);
//     console.log(r);
//    }catch(e){
//       console.log(e);
//    }
// }

// export const updateTodosApi=(id,todo)=>async()=>{
//    console.log(id);
//    try{
//     await axios.patch(`http://localhost:8080/todos/${id}`,{
//       isCompleted:!todo.isCompleted,
//     });
//    }catch(e){
//       console.log(e);
//    }
// }