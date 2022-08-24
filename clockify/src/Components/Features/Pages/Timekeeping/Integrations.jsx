import React from 'react'
import styles from "../../FeaturesStyle/Pages.module.css"
const Integrations = () => {
  return (
    <div className={styles.div}>
        <h2>Integrations</h2>
        <p>Connect Clockify with other apps</p>
      <div>
        <img src="https://clockify.me/assets/images/integrations/time-tracking-integrations-quickbooks.png"></img>
      </div>
      <div>
        <img src="https://clockify.me/assets/images/integrations/time-tracking-integrations-trello.png"></img>
      </div>
      <div>
        <img src="https://clockify.me/assets/images/integrations/time-tracking-integrations-asana.png"></img>
      </div>
      <div>
        <img src="https://clockify.me/assets/images/integrations/time-tracking-integrations-jira.png"></img>
      </div>
      logoparts
      <div>
        <img src="https://clockify.me/assets/images/multiple-clockify-integrations.svg"></img>
      </div>
    
    </div>
  )
}

export default Integrations