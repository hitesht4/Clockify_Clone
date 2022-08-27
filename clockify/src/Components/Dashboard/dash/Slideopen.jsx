import React from 'react'
import styles from "./STYLE/Slideopen.module.css"
import { FiClock} from 'react-icons/fi';
import {VscCalendar} from "react-icons/vsc"
import {BiGridAlt} from "react-icons/bi"
import {IoStatsChart,IoSettingsOutline} from "react-icons/io5"
import {BsTagFill} from "react-icons/bs"
import {FaFileAlt,FaUsers,FaRegUserCircle} from "react-icons/fa"
import {GiThreeFriends} from 'react-icons/gi';

import { NavLink } from 'react-router-dom';
const navbaractive={
  backgroundColor: "green",
   color:"green"
}
const navbarnotactive={
  backgroundColor:"red",
  color:"red"
}
const Slideopen = () => {
  return (
    <div className={styles.main}>
        <div className={styles.iconsbox}>
         <NavLink to="/dashboard/timetracker" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}>  <div ><FiClock className={styles.icons1}/></div></NavLink> 
         <NavLink to="/dashboard/calender">  <div><VscCalendar  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/dashboard">   <div><BiGridAlt  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/reports"> <div><IoStatsChart  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/projects"> <div><FaFileAlt  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/team"> <div><FaUsers  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/clients">  <div><FaRegUserCircle  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/tags">  <div><BsTagFill  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/settings">  <div><IoSettingsOutline  className={styles.icons1}/></div></NavLink>
        </div>
        </div>
  )
}

export default Slideopen