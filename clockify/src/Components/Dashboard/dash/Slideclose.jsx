import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getGoals } from '../../../features/goals/goalsSlice'
import styles from "./STYLE/Slideclose.module.css"
const navbaractive={
  backgroundColor: "",
  // color:"white",
   color:"rgb(35,192,254)"
}
const navbarnotactive={
  backgroundColor:"silver",
  color:"white"
}

const Slideclose = () => {
  // const {user}=useSelector(state=>state.auth)
  // const dispatch=useDispatch()
  // useEffect(()=>{
  //   if
  // dispatch(getGoals())
  // },[user])
  return (
    <div className={styles.main}>
        <div className={styles.iconsname}>
            
        <NavLink to="/dashboard/timetracker" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}> <div><p>TIME TRACKER</p></div></NavLink>
        <NavLink to="/dashboard/calender" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}>    <div><p>CALENDAR</p></div></NavLink>
        <NavLink to="/dashboard/dashboard" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}><div><p>DASHBOARD</p></div></NavLink>
        <NavLink to="/dashboard/reports" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}><div><p>REPORTS</p></div></NavLink>
        <NavLink to="/dashboard/projectdiv" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}><div><p>PROJECTS</p></div></NavLink>
        <NavLink to="/dashboard/team" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}><div><p>TEAM</p></div></NavLink>
        <NavLink to="/dashboard/clients" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}> <div><p>CLIENTS</p></div></NavLink>
        <NavLink to="/dashboard/tags" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}><div><p>TAGS</p></div></NavLink>
        <NavLink to="/dashboard/settings" style={({isActive}) => (
    isActive ? navbaractive: navbarnotactive
  )}><div><p>SETTINGS</p></div></NavLink>

        </div>
    </div>
  )
}

export default Slideclose