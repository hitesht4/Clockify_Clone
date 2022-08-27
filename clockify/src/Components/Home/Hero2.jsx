import React from 'react';
import styles from './Styles/Hero.module.css';
import HeroButton from './HeroButton';
import {IoIosPeople} from 'react-icons/io';

const Hero2 = () => {
  return (
  <div className={styles.Container201} style={{paddingBottom:"60px"}}>
    <div className={styles.Hero}>
        <h1>Start tracking time with Clockify</h1>
        <div >
          <ul className={styles.Stars2}>
            <li>
                24/7 Support
            </li>
              <li>Cancel Anytime</li>
            <li>Free Forever</li>
          </ul>
        </div>
        <HeroButton router={"/signup"} label={"CREATE FREE ACCOUNT"}/>
        <p className={styles.Info}><IoIosPeople style={{fontSize:"20px"}}/>135,897 people signed up last month</p>
    </div>
  </div>
  )
}

export default Hero2;