import React from 'react';
import styles from './Styles/TaskApp.module.css';
import logo from '../Home/Assets/empty-tracker-icon.jpg';
import {ImAndroid,ImChrome} from 'react-icons/im';
import {BsApple,BsWindows} from 'react-icons/bs';

const EmptyTask = () => {
  return (
    <div className={styles.Empty}>
        <img src={logo} alt="" />
        <h4>Let’s start tracking!</h4>
        <p>Install Clockify and track time anywhere.</p>
        <div className={styles.AppFlex}>
            <ImAndroid style={{fontSize:"30px"}}/>
            <ImChrome style={{fontSize:"30px"}}/>
            <BsApple style={{fontSize:"30px"}}/>
            <BsWindows style={{fontSize:"30px"}}/> 
        </div>
        <p>50+ Integrations</p>
        <br />
        <div className={styles.sky}>
           Enable Timesheet Stamp
        </div>  
    </div>
  )
}

export default EmptyTask