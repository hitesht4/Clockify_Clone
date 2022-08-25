import React from 'react';
import styles from './Styles/Hero3.module.css';
import J1  from './Assets/J1.jpg';
import J2  from './Assets/J2.jpg';
import J3  from './Assets/J3.jpg';
import J4  from './Assets/J4.jpg';
import Header from './Header';

const HeroDiv=[
{Img:J1,head:"24/7",desc:"support anytime, anywhere"},
{Img:J2,head:"1 h",desc:"average response time"},
{Img:J3,head:"95%",desc:"satisfaction score (12k+ ratings)"},
{Img:J4,head:"99.99%",desc:"highest uptime levels"}
];

const Hero3 = () => {
  return (
    <div className={styles.Container101}>
        <Header/>
    <div className={styles.Container103}>
        {HeroDiv.map(item=>(
            <div>
            <div className={styles.flex2}>
            <img src={item.Img} alt="" />
            <h4>{item.head}</h4>
            </div>
            <p>{item.desc}</p>
            </div>
        ))}
        
    </div>
    <div>
    <button className={styles.button3}>Contact Us</button>
    <p className={styles.Options}>EMAIL | PHONE | CHAT</p>
    </div>
    </div>
  )
}

export default Hero3;


