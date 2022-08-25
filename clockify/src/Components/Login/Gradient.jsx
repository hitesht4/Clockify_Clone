import React from 'react';
import styles from './Styles/Gradient.module.css';
import Img from '../../assets/images/Login-Image.jpg';

const Gradient = () => {
  return (
    <div className={styles.Intro}>
        <div className={styles.text}>
            <div><h2>Scheduling</h2></div>
        <div>
        <h6>Visualize projects on a timeline and plan team's </h6>
          <h6>  capacity (see who's busy and who's available).</h6>
        </div>
        <button className={styles.How}>
            SEE HOW IT WORKS
        </button>
        </div>
        <div className={styles.Img}>
        <img src={Img} alt="" />
        </div>
    </div>
  )
}

export default Gradient;