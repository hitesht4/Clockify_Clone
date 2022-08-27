import React from 'react';
import styles from './Styles/Header.module.css';

const Header = ({label1,label2,label3}) => {
  return (
    <div className={styles.Headers}>
       {label1 && <p>{label1}</p>}
       {label2 && <h2>{label2}</h2>}
       {label3 && <h5>{label3}</h5>}  
    </div>
  )
}

export default Header;


