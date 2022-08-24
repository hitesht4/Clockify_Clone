import React from 'react';
import styles from './Styles/Header.module.css';

const HeroButton = ({label}) => {
  return (
    <div>
        <button className={styles.Herobutton}>
           {label}
        </button>
    </div>
  )
}

export default HeroButton