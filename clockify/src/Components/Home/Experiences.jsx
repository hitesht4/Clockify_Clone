import React from 'react';
import ExperienceDiv from './ExperienceDiv';
import Header from './Header';
import styles from './Styles/Experiences.module.css';

const Experiences = () => {
    const expereinces= new Array(15).fill("");
  return (
    <div className={styles.ContainerExp}>
      <Header/>
    <div className={styles.Logos}>
        <img src="https://clockify.me/assets/images/customer-feedback-logo-expanded-3.svg" alt="" />
    </div>
    <div className={styles.experiences}>
       {expereinces.map(item=>(
        <ExperienceDiv key={item}/>
       ))}
    </div>
    </div>
  )
}

export default Experiences;