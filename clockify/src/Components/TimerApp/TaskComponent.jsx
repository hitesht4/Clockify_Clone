import React,{ useState} from 'react';
import styles from './Styles/TaskComp.module.css';
import {GrAddCircle} from 'react-icons/gr';
import {BsFillTagsFill,BsThreeDotsVertical} from 'react-icons/bs';
import {FiDollarSign} from 'react-icons/fi';
import {AiTwotoneEdit} from 'react-icons/ai';
import {MdDeleteForever} from 'react-icons/md';
import { useDispatch } from 'react-redux';
// import { deleteTasksApi, updateTaskNameApi, updateTasksApi } from '../../Redux/Tasks/Task.actions';
import { deleteGoal } from '../../features/goals/goalsSlice';

const TaskComponent = ({item}) => {
    const [open,setOpen]=useState(false);
    const [task,setTask]=useState("");
    const dispatch=useDispatch();
    const handleDelete=()=>{
      dispatch(deleteGoal(item._id));
    }
    // const handleStatus=()=>{
    //   dispatch(updateTasksApi(item.id,item));  
    // }
    const handleClick=(e)=>{
      setTask(e.target.value);
    }
    // const handlePress=(e)=>{
    //   if(e.key==="Enter"){
    //     dispatch(updateTaskNameApi(item.id,task));
    //     setOpen(false);
    //   }
      
    // }
  return (
    <div className={styles.Task}>
       <div className={styles.Desc} >
            <div onClick={()=>setOpen(!open)} className={styles.Up}>
               <h6 style={{color:item.status ? "green" : "red"}}>{item.text}</h6>
            </div>
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
            <div className={styles.Time}>
            <h6>{item.start}</h6>
            <h6>{item.end}</h6>
            </div>
            <div className={styles.Edit}>
                <h6></h6>
            </div>
            <div className={styles.Tags3}>
                <AiTwotoneEdit style={{fontSize:"22px"}}/>
            </div>
            <div className={styles.Tags2} onClick={handleDelete}>
                <MdDeleteForever style={{fontSize:"25px"}}/>
            </div>
            <div className={styles.Tags}>
                <BsThreeDotsVertical style={{fontSize:"22px"}}/>
            </div>
       </div>
    </div>
  )
}

export default TaskComponent;