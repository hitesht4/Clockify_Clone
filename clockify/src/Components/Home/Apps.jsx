import React from 'react';
import Header from './Header';
import styles from './Styles/Apps.module.css';


let appsArray=[
    {Img:"https://clockify.me/assets/images/time-tracking-app-desktop.png",
     heading:"Dekstop App",
     buttons:["Windows","Mac","Linux"]},
    {Img:"https://clockify.me/assets/images/time-tracking-app-web.png",
    heading:"Web App",
     buttons:["Edge","Chrome","Firefox"]},
    {Img:"https://clockify.me/assets/images/time-tracking-app-mobile.png",
    heading:"Mobile App",
    buttons:["Android","Ios"]},
    {Img:"https://clockify.me/assets/images/time-tracking-app-kiosk.png",
    heading:"Kiosk App",buttons:["Any Device"]}
]


const Apps = () => {
  return (
    <div className={styles.AppsContainer}>
    <Header label2="Time tracking apps"
    label3="Clockify works across devices. Track time from anywhere — all data is synced online."/>
    <div className={styles.Apps}>
        {appsArray.map((item,index)=>(
            <div className={styles.AppsChild} key={index}>
               <img src={item.Img} alt="" />
               <h6>{item.heading}</h6>
                {item.buttons.map((item,index)=>(
                    <button key={index}>{item}</button>
               ))}
            </div>
        ))}  
    </div>
    </div>
  )
}

export default Apps;