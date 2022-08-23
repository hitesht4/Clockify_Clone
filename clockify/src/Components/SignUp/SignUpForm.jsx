import React from 'react';
import styles from './Styles/SignupForm.module.css';
import Form from 'react-bootstrap/Form';
import {FcGoogle} from 'react-icons/fc';

const SignUpForm = () => {
  return (
    <div>
    <div className={styles.form}>
    <h5>Sign Up</h5>
    <Form >
      {/* //email Input */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
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
      <FcGoogle style={{fontSize:"25px"}}/>
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