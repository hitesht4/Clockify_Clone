import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./STYLE/Slideclose.module.css"
const Slideclose = () => {
  return (
    <div className={styles.main}>
        <div className={styles.iconsname}>
            
        <NavLink to="/dashboard/timetracker"> <div><p>TIME TRACKER</p></div></NavLink>
        <NavLink to="/dashboard/calender">    <div><p>CALENDAR</p></div></NavLink>
        <NavLink to="/dashboard/dashboard"><div><p>DASHBOARD</p></div></NavLink>
        <NavLink to="/dashboard/reports"><div><p>REPORTS</p></div></NavLink>
        <NavLink to="/dashboard/projects"><div><p>PROJECTS</p></div></NavLink>
        <NavLink to="/dashboard/team"><div><p>TEAM</p></div></NavLink>
        <NavLink to="/dashboard/clients"> <div><p>CLIENTS</p></div></NavLink>
        <NavLink to="/dashboard/tags"><div><p>TAGS</p></div></NavLink>
        <NavLink to="/dashboard/settings"><div><p>SETTINGS</p></div></NavLink>

        </div>
    </div>
  )
}

export default Slideclose