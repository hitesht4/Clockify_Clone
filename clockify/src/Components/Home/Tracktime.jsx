import React from 'react';
import styles from './Styles/TrackTime.module.css';
import I1 from './Assets/I1.jpg';
import I2 from './Assets/I2.jpg';
import I3 from './Assets/I3.jpg';
import I4 from './Assets/I4.jpg';
import Header from './Header';


let timeArray=[
{Img:I1,heading:"Boost productivity",desc:"Track time you spend on activities, see where your time goes, and improve your time management skills."},
{Img:I2,heading:"Bill clients",desc:"Track billable time and expenses, show clients how much you've worked, see how much you've earned, and create invoices."},
{Img:I3,heading:"Manage team",desc:"Track attendance for payroll and accounting, see who works on what, and manage workload among teams."},
{Img:I4,heading:"Business intelligence",desc:"Track time and analyze your company's efficiency across projects, clients, departments, and employees."}
];

const Tracktime = () => {
  return (
    <div className={styles.TimeTracker}>
        <Header label2="Why track time with Clockify"/>
    <div className={styles.TrackTime_grid}>
        {timeArray.map((item,index)=>(
            <div className={styles.TimeChild} key={index}>
            <img src={item.Img} alt="" />
            <h5>{item.heading}</h5>
            <p>{item.desc}</p>
            <p className={styles.bttn}>Learn More {"->"}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Tracktime;

