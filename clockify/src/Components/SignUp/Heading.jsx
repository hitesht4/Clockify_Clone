import React from 'react';
import styles from './Styles/Headings.module.css';


const Heading = () => {
  return (
    <div className={styles.Section}>
       <h3>Get started with Clockify</h3>
       <h6>Create a free account to start tracking time and supercharge your productivity.</h6>
       <p>No credit card required · Unsubscribe at any time</p>
    </div>
  )
}

export default Heading