import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Styles/Form.module.css';
import {FcGoogle} from 'react-icons/fc';
import { UseUserAuth } from '../../context/UserAuthContext';
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"

const LoginForm = ({label,checkBox}) => {
  const {googlesigin}=UseUserAuth()
  const navigate=useNavigate()
  const HandleGooglesigin=async()=>{

    try{
     await googlesigin()
     navigate("/")
    }
    catch(err){
      toast.error(err.message)

    }


   }
  return (
    <div className={styles.form}>
    <h5>{label}</h5>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
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