import React from 'react';
import styles from './Styles/Gradient.module.css';

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
        <img src="https://app.clockify.me/assets/features-info/scheduling-promo.webp" alt="" />
        </div>
    </div>
  )
}

export default Gradient