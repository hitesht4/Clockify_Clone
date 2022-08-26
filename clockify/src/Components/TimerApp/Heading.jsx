import React from 'react';
import {FaRegEdit} from 'react-icons/fa';
import styles from './Styles/TaskComp.module.css';


const Heading = () => {
  return (
        <div className={styles.TaskHead}>
            <h6>Today</h6>
            <div className={styles.Edit}>
              <h6>00:00:00</h6>
              <FaRegEdit style={{fontWeight:"light",fontSize:"20px"}}/>  
            </div>  
       </div> 
  )
}

export default Heading;