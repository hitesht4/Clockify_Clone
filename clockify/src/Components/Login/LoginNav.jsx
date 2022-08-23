import React from 'react';
import styles from './Styles/LoginNav.module.css';

const LoginNav = () => {
  return (
    <div className={styles.Nav}>
        <div className={styles.Logo}>
        <img src="https://app.clockify.me/assets/logo.svg" alt="" />
        </div>
        <div className={styles.Navflex}>  
            <h6>Dont Have an Account ?</h6>
            <h6 className={styles.signUp}>Sign Up</h6>
        </div>
    </div>
  )
}

export default LoginNav;