import React, { useState,useEffect } from 'react'
// import Slideclose from './Slideclose';
// import Slideopen from './Slideopen';
import styles from "./STYLE/Slidebar.module.css"
import {VscMenu} from "react-icons/vsc"
import { Route, Routes, useNavigate } from 'react-router-dom';
import TimeTracker from '../pages/TimeTracker';
import Calender from '../pages/Calender';
import Dashboard from '../pages/Dashboard';
import Reports from '../pages/Reports';
import Team from '../pages/Team';

import Slideclose from './Slideclose';
import Slideopen from "./Slideopen"

// import Projects from '../../Features/Pages/Reporting/Projects';

import {BsQuestionCircle} from "react-icons/bs"
import {IoNotificationsSharp} from "react-icons/io5"
import {FaUserCheck} from "react-icons/fa"
import Clientdiv from '../pages/Client';
import Tagsdiv from '../pages/Tags';
import Settingsdiv from '../pages/Settings';
import Projectsdiv from '../pages/Projects';
import Spinner from "../../Spinner.jsx/Spinner"
import { useDispatch, useSelector } from 'react-redux';
import { getGoals } from '../../../features/goals/goalsSlice';
import{reset} from "../../../features/auth/authSlice"
const Slidebar = () => {
 const [state,setstate]=useState(false);
 const handleclick=()=>{
    setstate(!state)
 }

 const dispatch=useDispatch();
const navigate=useNavigate()
   const {goals,isLoading,isError,message}=useSelector(state=>state.goal)
   const {user}=useSelector(state=>state.auth)

 useEffect(()=>{
   if(isError){
     console.log(message)
   }
 if(!user){
   navigate("/login")
 }


  dispatch(getGoals())
 
 

 


  
 
 },[user,navigate,isError,message,dispatch])

 

  return (
    <div className={styles.main}>

      <div className={styles.navbar}>

       <div className={styles.navbarleftmain}>
        
       <div  onClick={handleclick} className={styles.menuicons} >
        <VscMenu fontSize="27px" />
       
        </div>
        <div>
           <img src="https://clockify.me/assets/images/clockify-logo.svg" alt="clockify logo"></img>
        </div>
       </div>
       {/* right div */}
       <div className={styles.navbarrightmain}>
          <div>
            <p style={{marginTop:"5px"}}> ABHISHEK WORKSPACE</p>
          </div>
          <div className={styles.upgradebtn}>
           <button >UPGRADE</button>
          </div>
          <div style={{weight:"20px",marginTop:"6px"}}>
            <BsQuestionCircle fontSize="27px"/>
          </div>
          <div style={{marginTop:"6px"}}>
           <IoNotificationsSharp fontSize="27px"/>
          </div>
          <div style={{weidth:"40px",marginRight:"20px",marginTop:"6px"}}>
            <FaUserCheck fontSize="27px"/>
          </div>
       </div>
      
      </div>

    <div className={styles.Slideflex}>
      <div>{
               state ? <div className={styles.slidingfuncbox}>
             <div><Slideopen/></div>
             <div><Slideclose/></div>
      </div>:
            <div>
                 <Slideopen/>
             </div>

            }
          
       </div>
       <div className={styles.pages}>
         <Routes>
            <Route path="/timetracker" element={<TimeTracker/>}></Route>
            <Route path="/calender" element={<Calender/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
           
            <Route path="/reports" element={<Reports/>}></Route>
            <Route path="/projectdiv" element={<Projectsdiv/>}></Route>
            <Route path="/team" element={<Team/>}></Route>
            <Route path="/clients" element={<Clientdiv/>}></Route>
            <Route path="/tags" element={<Tagsdiv/>}></Route>
            <Route path="/settings" element={<Settingsdiv/>}></Route>
           </Routes>
       </div>
   </div>

    </div>
  )
}

export default Slidebar