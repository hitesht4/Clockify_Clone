import React from 'react';
import styles from '../Login/Styles/LoginNav.module.css';

const SignUpNav = () => {
  return (
    <div className={styles.navW}>
    <div className={styles.Nav}>
        <div className={styles.Logo}>
        <img src="https://app.clockify.me/assets/logo.svg" alt="" />
        </div>
        <div className={styles.Navflex}>  
            <h6 className={styles.signUp}>Log In</h6>
        </div>
    </div>
    </div>
  )
}

export default SignUpNav;