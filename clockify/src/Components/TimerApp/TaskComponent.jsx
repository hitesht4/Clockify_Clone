import React from 'react';
import styles from './Styles/TaskComp.module.css';
import {GrAddCircle} from 'react-icons/gr';
import {BsFillTagsFill,BsCalendar4Event,BsThreeDotsVertical} from 'react-icons/bs';
import {FiDollarSign,FiPlay} from 'react-icons/fi';

const TaskComponent = () => {
  return (
    <div className={styles.Task}>
       <div className={styles.Desc}>
            {/* <input type="text" value="Item"/> */}
            <div>
                <h6>Item</h6>
            </div>
            <div className={styles.Projects}>
            <GrAddCircle style={{fontSize:"20px",color:"#1cb9f7"}}/>
                <h6>Project</h6>
            </div>
            <div className={styles.Tags}>
                <BsFillTagsFill style={{fontSize:"30px"}}/>
            </div>
            <div className={styles.Tags}>
                <FiDollarSign style={{fontSize:"30px"}}/>
            </div>
            <div className={styles.Time}>
            <input type="text" />
            <input type="text" />
            </div>
            <div className={styles.Edit}>
                <h6>Timer</h6>
            </div>
            <div className={styles.Tags}>
                <BsCalendar4Event style={{fontSize:"30px"}}/>
            </div>
            <div className={styles.Tags}>
                <FiPlay style={{fontSize:"30px"}}/>
            </div>
            <div className={styles.Tags}>
                <BsThreeDotsVertical style={{fontSize:"30px"}}/>
            </div>
       </div>
    </div>
  )
}

export default TaskComponent;