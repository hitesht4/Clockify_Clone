import React from 'react';
import styles from './Styles/Navbar.module.css';
import logo from'./Assets/clockify-logo.jpg';
import {useNavigate} from 'react-router-dom';
import { UseUserAuth } from '../../context/UserAuthContext';
import { Button } from 'react-bootstrap';

const Navbar = () => {
  const {user,Logout}=UseUserAuth()
  const handleClick=async()=>{
    try{
    await Logout()
    }
    catch(err){
      console.log(err)
    }

  }
  const navigate=useNavigate();
  return (
    <div className={styles.NavContainer}>
    <div className={styles.Navbox}>

        <div className={styles.Logo} onClick={()=>navigate("/")}>
        <img src={logo} alt="" />
        </div>
        
        <div className={styles.Navflex}> 
        <div>
          <h6 onClick={()=>navigate("/features")}>FEATURES</h6>
          <h6 onClick={()=>navigate("/downloads")}>DOWNLOAD</h6>
        </div> 

     
      {user&&user.email?<div><h1 style={{display:"flex"}}>
      I love you Nancy 
      <Button onClick={handleClick} variant="primary">Logout</Button>
      </h1></div>
      :<div><h6 onClick={()=>navigate("/login")}>Log In</h6>
          <button onClick={()=>navigate("/signup")}className={styles.bttn2}>SIGN Up</button></div>}
    
     
 
         
           
        </div>
    </div>
    </div>
  )
}

export default Navbar;