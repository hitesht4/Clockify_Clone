import React from 'react';
import styles from '../Login/Styles/LoginNav.module.css';
import {useNavigate} from 'react-router-dom';

const SignUpNav = () => {
  const navigate=useNavigate();
  return (
    <div className={styles.navW}>
    <div className={styles.Nav}>
        <div className={styles.Logo} onClick={()=>navigate("/")}>
        <img src="https://app.clockify.me/assets/logo.svg" alt="" />
        </div>
        <div className={styles.Navflex}>  
            <h6 className={styles.signUp} onClick={()=>navigate("/login")}>Log In</h6>
        </div>
    </div>
    </div>
  )
}

export default SignUpNav;