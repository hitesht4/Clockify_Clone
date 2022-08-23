import React from 'react';
import {MdSecurity,MdLanguage} from 'react-icons/md';
import styles from './Styles/Form.module.css';


const Footer = ({margin}) => {
  return (
    <div>
    <div className={styles.footer} style={{marginTop:margin}}>
        <MdLanguage style={{fontSize:"25px"}}/>English
       <p className={styles.Security}><MdSecurity style={{fontSize:"25px"}}/> Your data is safe with us: <span>Security Privacy</span>
        </p> 
    </div>
    </div>
  )
}

export default Footer;