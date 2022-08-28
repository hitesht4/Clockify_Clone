import React from 'react';
import styles from './Styles/Navbar.module.css';
import logo from'./Assets/clockify-logo.jpg';
import {useNavigate} from 'react-router-dom';
import { UseUserAuth } from '../../context/UserAuthContext';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout,reset } from '../../features/auth/authSlice';

const Navbar = () => {
  const  dispatch=useDispatch()

  const {user}=useSelector(state=>state.auth)
  const {User,Logout}=UseUserAuth()
  const handleClick=async()=>{
    try{
    await Logout()

    navigate("/")
    
    }
    catch(err){
      console.log(err)
    }


  }
  const handleClick2=()=>{
    dispatch(logout())
    dispatch(reset())
    navigate("/")
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


     {
      !user&&!User?"":user!==null?(<div><h5 style={{display:"flex",gap:"20px"}}>
      {user&&user.email.split(" ")}
        <Button onClick={handleClick2} variant="primary">Logout</Button>
        </h5></div>):(
          <div><h5 style={{display:"flex",gap:"20px"}}>
          {User&&User.email.split(" ")}
            <Button onClick={handleClick} variant="primary">Logout</Button>
            </h5></div>
        )
}
 {
  !user&&!User&&<div><h6 onClick={()=>navigate("/login")}>Log In</h6>
  <button onClick={()=>navigate("/signup")}className={styles.bttn2}>SIGN Up</button></div>
  }



    
     
 
         
           
        </div>
    </div>
    </div>
  )
}

export default Navbar;