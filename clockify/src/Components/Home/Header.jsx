import React from 'react';
import styles from './Styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.Headers}>
       <p>#1 RATED SOFTWARE</p>
       <h2>Join millions of happy users</h2>
       <h5>Clockify is the best rated time tracking software with 4,000+ reviews.</h5>
    </div>
  )
}

export default Header