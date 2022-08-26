import { GetTasksERROR, GetTasksLOADING, GetTasksSUCCESS, PostTasksSUCCESS } from "./Task.types";

const initialstate={
    tasks:[],
    loading:false,
    error:false,
}
export const TaskReducer = (state=initialstate,{type,payload}) => {
    switch(type){
        case GetTasksLOADING:{
            return {...state,loading:true};
        }
        case GetTasksERROR:{
           return {...state,loading:false,error:true};
        }
        case GetTasksSUCCESS:{
           return {...state,tasks:payload,loading:false};
        }
        case PostTasksSUCCESS:{
           return {...state, tasks:[...state.tasks,payload],loading:false};
        }
        default:{
            return state;
        }
    }
}

 