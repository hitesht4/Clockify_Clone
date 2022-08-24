import React from 'react'
import styles from "../../FeaturesStyle/Pages.module.css"
const TimeTracker = () => {
  return (
    <div className={styles.div}>
      <h2>Time tracker</h2>
      <p>Start and stop timer as you work, or enter hours manually</p>
    
        <div>  <img src="https://clockify.me/assets/images/features/features-tracker-screenshot.svg"></img>
        </div>
        <div>
          footer
        </div>
    </div>
  )
}

export default TimeTracker