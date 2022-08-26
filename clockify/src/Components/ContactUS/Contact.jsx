import React from "react";
import STyles from '../ContactUS/Contact.module.css'
import {AiOutlineMail} from 'react-icons/ai';
import {FiMessageSquare , FiPhoneCall} from 'react-icons/fi';
import {FaBars} from 'react-icons/fa'
import Footer from "../Footer/Footer";

const Contact=()=>{
    return(
        <>
            <div>
                <div className={STyles.navbar}>
                    <div className={STyles.logo}>
                    <img src="https://clockify.me/help/wp-content/themes/pumble-learn/assets/images/logo.svg" alt="logo" />
                    </div>
                    <div className={STyles.link}>
                    <p>Help Center</p>
                    <p>What's New</p>
                    <p>Tutorials</p>
                    <p>Status</p>
                    <p>Feedback</p>
                    <p>Forum</p>
                    <img src="https://s.w.org/images/core/emoji/14.0.0/svg/2197.svg" alt="forum" />
                    </div>
                   <div >
                   <input 
                    className={STyles.input}
                   type="text" 
                   placeholder="Search the help center"
                   />
                   </div>
                    <div>
                    <button>Contact</button>
                    </div>
                    <div className={STyles.icon}>
                        <FaBars/>
                    </div>                   
                </div>
                <div className={STyles.contact}>
                    <div>
                        <AiOutlineMail className={STyles.contacticons}/>
                        <h3>support@clockify.me</h3>
                    </div>
                    <div>
                    <FiMessageSquare className={STyles.contacticons}/>
                        <h3>START CHAT</h3>
                    </div>
                    <div>
                    <FiPhoneCall className={STyles.contacticons}/>
                        <h3>+1 855-738-8741</h3>
                    </div>
                </div>
                <div className={STyles.send}>
                    <h1>Contact Us</h1>
                    <p>Your Name</p>
                    <input type="text" />
                    <p>Your Email</p>
                    <input type="text" />
                    <p>Subject</p>
                    <input type="message" />
                    <p>Your Message</p>
                    <textarea/>
                    <p>Upload a File</p>
                    <input type="file" />
                    <br />
                    <button>Send Message</button>
                </div>
            </div>
            <div className={STyles.footer}>
               <Footer/> 
            </div>
        </>
    )
}

export default Contact ;