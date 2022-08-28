import React from 'react'
import HeroButton from './HeroButton';
import styles from './Styles/Hero.module.css';
import {IoIosPeople} from 'react-icons/io';

const Hero = () => {
  return (
    <div className={styles.Container201}>
    <div className={styles.Hero}>
        <h1>The most popular free <span className={styles.Span2}>time tracker</span> for teams</h1>
        <p>Time tracking software used by millions. Clockify is a time tracker and</p>
        <p>timesheet app that lets you track work hours across projects.</p>
        <p>Unlimited users, free forever.</p>

        <div className={styles.Stars}>
        <p>★★★★★</p>
        <p>4000+ reviews</p>
        </div>

        <div className={styles.Click}>
        <HeroButton router={"/dashboard"} label={"START TRACKING TIME-IT'S FREE "}/>
         <p className={styles.Info}><IoIosPeople style={{fontSize:"20px"}}/>135,897 people signed up last month</p>
         </div>

        </div>
        
    </div>

        
    // </div>
  )
}

export default Hero


