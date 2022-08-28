import React from 'react'
import Heading from '../Components/SignUp/Heading';
import SignUpForm from '../Components/SignUp/SignUpForm';
import SignUpNav from '../Components/SignUp/SignUpNav';
import Footer from '../Components/Login/Footer';

const SignUp = () => {
  return (
    <div style={{textAlign:"center"}}>
        <SignUpNav/>
        <Heading/>
        <SignUpForm/>
        <Footer margin="100px"/>
    </div>
  )
}

export default SignUp;