import React from 'react';
import logo from './Assets/clockify-logo.jpg';
import styles from './Styles/Footer.module.css';
import {TiSocialTwitter} from 'react-icons/ti';
import {BsFacebook , BsInstagram} from 'react-icons/bs' ;
import {AiFillYoutube , AiFillLinkedin} from 'react-icons/ai';
import {MdLanguage} from 'react-icons/md';


const Footer = () => {
  return (
    <div className={styles.ContainerF01}>
    <div className={styles.FGrid}>

    <div className={styles.Childiv1}>
        <img src={logo} alt="" />
        <p>
           The world's leading time tracker and 
           <br/>
           timesheet software for teams
        </p>
        <h6>SIGN UP FREE</h6>
        <h6>LOG IN</h6>
    </div>
        <div className={styles.Childiv}>
        <ul>
            <h6>PRODUCT</h6>
            <li>Features</li>
            <li>Download</li>
            <li>Integrations</li>
            <li>Upgrade</li>
            <li>API</li>
            </ul>
        </div>

         <div className={styles.Childiv}>
        <ul>
            <h6>SOLUTION</h6>
            <li>Time clock</li>
            <li>Timecard calculator</li>
            <li>Timesheet</li>
            <li>Reporting</li>
            <li>Scheduling</li>
        </ul>
        </div>

        <div className={styles.Childiv}>
        <ul>
            <h6>COMPANY</h6>
            <li>About us</li>
            <li>Customers</li>
            <li>WE ALSO MAKE</li>
            <li>Pumble</li>
            <li>Plaky</li>
            </ul>
        </div>

        <div className={styles.Childiv}>
        <ul>
            <h6>SUPPORT</h6>
            <li>Help</li>
            <li>Tutorials</li>
            <li>Resources</li>
            <li>Blog</li>
            <li>Contact</li>
            </ul>
        </div>
    </div>

    <div className={styles.Bottom}>
    <div className={styles.Division1}>

    <div>
      <p>© 2022 Clockify</p> 
      <p>Sitemap</p>
      <p>Cookies</p>
      <p>Terms</p>
      <p>Privacy</p>
      <p>Security</p>
    </div>

    <div>
      <p>COING Inc, 2100 Geng Road, Suite 210, Palo Alto, CA 94303, USA, +1-855-738-8741</p>
    </div>

    </div>
       <div className={styles.Division2}>
               <div className={styles.social}>
                    <TiSocialTwitter/>
                    <BsFacebook/>
                    <BsInstagram/>
                    <AiFillYoutube/>
                    <AiFillLinkedin/>
                </div>
                <div>
                   <p><MdLanguage/> English</p> 
                </div>
       </div>
    </div>
    </div>
  )
}







export default Footer