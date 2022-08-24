import React from 'react'
import styles from "../../FeaturesStyle/Pages.module.css"
const Invoicing = () => {
  return (
    <div className={styles.div}>
      <h2>Invoicing</h2>
      <p>Issue invoices based on tracked time, expenses, and hourly rates.</p>
      <div>
        <img src="https://clockify.me/assets/images/features/features-invoicing-screenshot.svg"></img>
      </div>
      <div>
        footer
      </div>
    </div>
  )
}

export default Invoicing