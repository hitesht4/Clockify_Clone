import React from 'react'
import Footer from '../Components/Login/Footer';
import Gradient from '../Components/Login/Gradient';
import LoginForm from '../Components/Login/LoginForm'
import LoginNav from '../Components/Login/LoginNav';
import styles from './Styles/Login.module.css';

const Login = () => {
  return (
    <div className={styles.grid}>

      <div>
      <LoginNav/>
      <LoginForm label="Log In" checkBox="Stay Signed In"/>
      <Footer/>
      </div>

      <div className={styles.Gradient}>
        <Gradient/>
      </div>
      
    </div>
  )
}

export default Login;