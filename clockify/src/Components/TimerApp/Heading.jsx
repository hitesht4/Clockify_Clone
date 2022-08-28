import React, { useState } from 'react';
import {FaRegEdit} from 'react-icons/fa';
import styles from './Styles/TaskComp.module.css';




const Heading = () => {
 let day=new Date()
 let h=day.getHours()
 let m=day.getMinutes()
 let s=day.getSeconds()
  if(day.getDay()==0){
    day="Sunday"
  }
  else if(day.getDay()==1){
    day="Monday"
  }
  else if(day.getDay()==2){
    day="Tuesday"
  }
  else if(day.getDay()==3){
    day="Wednesday"
  }
  else if(day.getDay()==4){
    day="Thursday"
  }
  else if(day.getDay()==5){
    day="Friday"
  }
  else if(day.getDay()==6){
    day="Saturday"
  }
 
  return (
        <div className={styles.TaskHead}>
            <h6>{day}</h6>
            <div className={styles.Edit}>
              <h6>{h<10 ? "0" + h : h}:{m<10 ? "0" + m : m}:{s<10 ? "0" + s : s}</h6>
              <FaRegEdit style={{fontWeight:"light",fontSize:"20px"}}/>  
            </div>  
       </div> 
  )
}

export default Heading;