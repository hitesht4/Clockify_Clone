import React, { useEffect, useState } from 'react';
import styles from './Styles/SignupForm.module.css';
import Form from 'react-bootstrap/Form';
import {FcGoogle} from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import  Spinner  from '../Spinner.jsx/Spinner';

import { register,reset } from '../../features/auth/authSlice';
import { UseUserAuth } from '../../context/UserAuthContext';

const SignUpForm = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {user,isLoading,isError,isSuccess,message}=useSelector(state=>state.auth)
  const {googlesigin}=UseUserAuth()
  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });
  const {email, password } = formData;
  useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  if(isSuccess||user){
    navigate("/dashboard/timetracker")
    
  }


    dispatch(reset())
  
    
  
  
  },[user,isError,isSuccess,message,navigate,dispatch])
  const onChange = (e) => {
    let {name,value}=e.target
    setFormData({
        ...formData,
        [name]:value
    })
  };
const handleSubmit=(e)=>{
    e.preventDefault()
 
   
      const userData={
        email,password
      }
      dispatch(register(userData))
 
}
const HandleGooglesigin=async()=>{

  try{
   await googlesigin()
   navigate("/dashboard")
  }
  catch(err){
    toast.error(err.message)

  }
  



 }
if(isLoading){
  return <Spinner/>
}
  return (
    <div>
    <div className={styles.form}>
    <h5>Sign Up</h5>
    <Form onSubmit={handleSubmit} >
      {/* //email Input */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={onChange} name="email" value={email}  type="email" placeholder="Enter email" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onChange={onChange} name="password" value={password} type="password" placeholder="Password" />
      </Form.Group>

      <div className={styles.formflex}>
        <Form.Check type="checkbox"/>
        <p>I agree to the <span className={styles.span}>Terms of Use</span></p>
      </div>

      <button type="submit" className={styles.btn}>
        CREATE FREE ACCOUNT
      </button>
    </Form>

    <div className={styles.Or}>
      <div></div>
          <p>OR</p>
      <div></div>
    </div>

     <button  className={styles.btn2}>
      <div>
      <FcGoogle onClick={HandleGooglesigin} style={{fontSize:"25px"}}/>
      </div>
      <div>
        Continue with Google
      </div>
      </button>
    </div>
    </div>
  )
}

export default SignUpForm;