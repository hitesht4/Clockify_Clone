import React from "react";
import Styles from '../Footer/Footer.module.css';
import {TiSocialTwitter} from 'react-icons/ti';
import {BsFacebook , BsInstagram} from 'react-icons/bs' ;
import {AiFillYoutube , AiFillLinkedin} from 'react-icons/ai'
const Footer=()=>{
    return (
        <div>
            <div className={Styles.container}>
                <div id="leftdiv">
                    <img src="https://clockify.me/assets/images/clockify-logo.svg" alt="logo" />
                    <p>The world's leading time tracker and timesheet software for teams</p>
                    <h3>SIGNUP FREE</h3>
                    <h3>LOG IN</h3>
                </div>
                <div id="rightdiv" style={{display:"flex", gap:"2rem"}}>
                    <div>
                        PRODUCT
                        <h3>Features</h3>
                        <h3>Download</h3>
                        <h3>Integration</h3>
                        <h3>Upgrade</h3>
                        <h3>API</h3>
                    </div>
                    <div>
                    SOLUTION
                        <h3>Time Clock</h3>
                        <h3>Timecard Claculator</h3>
                        <h3>Timesheet</h3>
                        <h3>Reporting</h3>
                        <h3>Scheduling</h3>
                    </div>
                    <div>
                    Company
                        <h3>About us</h3>
                        <h3>Customers</h3>
                        <p>We also make</p>
                        <img src="https://clockify.me/assets/images/pumble-icon-color.svg" alt="pumble-icon" />
                        <span>Pumble</span>
                        <br />
                        <img src="https://clockify.me/assets/images/plaky-icon-color.svg" alt="plaky-icon" />
                        <span>Planky</span>
                    </div>
                    <div>
                   SUPPORT
                        <h3>Help</h3>
                        <h3>Tutorials</h3>
                        <h3>Resourcing</h3>
                        <h3>Blog</h3>
                        <h3>Contact</h3>
                    </div>
                </div>
            </div>
            <div className={Styles.footerbottom}>
            <div>
                <ul className={Styles.list}>
                    <li>&#169;2022 Clockify</li>
                    <li>Sitemap</li>
                    <li>Cookies</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Security</li>
                </ul>
            </div>
                <div className={Styles.social}>
                    <TiSocialTwitter/>
                    <BsFacebook/>
                    <BsInstagram/>
                    <AiFillYoutube/>
                    <AiFillLinkedin/>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;
