import React, { useState } from 'react';
import styles from './Styles/Vedio.module.css';

const Vedio = () => {
    const [dark,setDark]=useState(false);
    const handleChange=()=>{
        setDark(!dark);
    }
  return (
    <div className={styles.Vedio}>
      <div>
        <img src="https://clockify.me/assets/images/customers-light-gray-3.svg" alt="" />
      </div>
    <div>
        <img src={!dark ? "https://clockify.me/assets/images/time-tracker-screenshot.svg" :"https://clockify.me/assets/images/time-tracker-dark-screenshot.svg"} alt="" />
    </div>
    <div className={styles.Switch}>
    <input type="checkbox" onChange={handleChange}/>
    <label>Dark Theme</label>
    </div>
    </div>
  )
}

export default Vedio