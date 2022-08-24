import React from 'react';
import styles from './Styles/LoginNav.module.css';
import {useNavigate} from 'react-router-dom';

const LoginNav = () => {
  const navigate=useNavigate();
  return (
    <div className={styles.Nav}>
        <div className={styles.Logo} onClick={()=>navigate("/")}>
        <img src="https://app.clockify.me/assets/logo.svg" alt="" />
        </div>
        <div className={styles.Navflex}>  
            <h6>Dont Have an Account ?</h6>
            <h6 className={styles.signUp} onClick={()=>navigate("/signup")}>Sign Up</h6>
        </div>
    </div>
  )
}

export default LoginNav;