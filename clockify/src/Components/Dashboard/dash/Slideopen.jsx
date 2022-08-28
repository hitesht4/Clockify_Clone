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
  backgroundColor: "black",
   color:"rgb(35,192,254)"
}
const navbarnotactive={
  backgroundColor:"silver",
  color:"black"
}
const Slideopen = () => {
  return (
    <div className={styles.main}>
        <div className={styles.iconsbox}>
         <NavLink to="/dashboard/timetracker" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}>  <div ><FiClock className={styles.icons1}/></div></NavLink> 
         <NavLink to="/dashboard/calender" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}>  <div><VscCalendar  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/dashboard" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}>   <div><BiGridAlt  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/reports" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}> <div><IoStatsChart  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/projectdiv" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}> <div><FaFileAlt  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/team" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}> <div><FaUsers  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/clients" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}>  <div><FaRegUserCircle  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/tags" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}>  <div><BsTagFill  className={styles.icons1}/></div></NavLink>
         <NavLink to="/dashboard/settings" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}>  <div><IoSettingsOutline  className={styles.icons1}/></div></NavLink>
        </div>
        </div>
  )
}

export default Slideopen