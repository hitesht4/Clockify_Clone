import React from 'react';
import Image from './Assets/FreeForever.PNG';
import styles from './Styles/FreeForever.module.css';

const FreeForever = () => {
  return (
    <div className={styles.FreeFor}>
        <div>
        <img src={Image} alt="" />
        </div>
    </div>
  )
}

export default FreeForever