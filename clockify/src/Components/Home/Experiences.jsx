import React from 'react';
import ExperienceDiv from './ExperienceDiv';
import Header from './Header';
import styles from './Styles/Experiences.module.css';





const Experiences = () => {
    const expereinces= new Array(15).fill("");
  return (
    <div className={styles.ContainerExp}>
      <Header label1="#1 RATED SOFTWARE"
      label2="Join millions of happy users"
      label3="Clockify is the best rated time tracking software with 4,000+ reviews."/>
    <div className={styles.Logos}>
        <img src="https://clockify.me/assets/images/customer-feedback-logo-expanded-3.svg" alt="" />
    </div>
    <div className={styles.experiences}>
       {expereinces.map((item,index)=>(
        <ExperienceDiv key={index}/>
       ))}
    </div>
    </div>
  )
}

export default Experiences;