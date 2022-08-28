import { DeleteTasksSUCCESS, GetTasksERROR, GetTasksLOADING, GetTasksSUCCESS, PostTasksSUCCESS, start, UpdateTasksSUCCESS } from "./Task.types";

const initialstate={
    tasks:[],
    start:"",
    loading:false,
    error:false,
}
export const TaskReducer = (state=initialstate,{type,payload}) => {
    switch(type){
        case start:{
            return {...state,start:payload};
        }
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
        case DeleteTasksSUCCESS:{
            let filtered=state.tasks.filter(item=>{
                return item.id!=payload;
            })
           return {...state, tasks:[...filtered],loading:false};
        }
        case UpdateTasksSUCCESS:{
             let updated=state.tasks.map((task)=>{
                if(task.id==payload.id){
                    return {...task,...payload}
                }else{
                    return task;
                }
            });
            return {...state,tasks:[...updated],loading:false};
        }
        default:{
            return state;
        }
    }
}

 