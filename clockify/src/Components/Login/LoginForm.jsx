import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Styles/Form.module.css';
import {FcGoogle} from 'react-icons/fc';
import { UseUserAuth } from '../../context/UserAuthContext';
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import { useDispatch, useSelector } from 'react-redux';
import  Spinner  from '../Spinner.jsx/Spinner';
import { login,reset } from '../../features/auth/authSlice';

const LoginForm = ({label,checkBox}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {user,isLoading,isError,isSuccess,message}=useSelector(state=>state.auth)
  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });
  const {googlesigin}=UseUserAuth()




 
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
      email,
      password
    }

      dispatch(login(userData))

 
  
    
 
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
    <div className={styles.form}>
    <h5>{label}</h5>
    <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={onChange} name="email" value={email} type="email" placeholder="Enter email" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onChange={onChange} name="password" value={password} type="password" placeholder="Password" />
      </Form.Group>

      <div className={styles.formflex}>
        <Form.Check type="checkbox" label={checkBox} />
        <h6>Forgot Password?</h6>
      </div>

      <button type="submit" className={styles.btn}>
        Log In
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
  )
};

export default LoginForm;