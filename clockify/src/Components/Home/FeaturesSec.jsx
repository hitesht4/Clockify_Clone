import React from 'react';
import Header from './Header';
import HeroButton from './HeroButton';
import styles from './Styles/FeatureSec.module.css';


const FeaturesSec = () => {
  return (
    <div className={styles.FeatureContainer}>
        <div>
            <Header label2="Time management features" label3="Track productivity, attendance, and billable hours with a simple time tracker and timesheet."/>
        <div className={styles.List}>
            
            <div className={styles.Listflex}>
            <div className={styles.ListItems}>
               <h5>TIMEKEEPING</h5> 
                    <h6></h6>
                    <p>Track work hours in real time.</p>
                    <h6>Timesheet </h6>
                    <p>Enter time in a weekly timesheet.</p>
                    <h6>Calendar</h6>
                    <p>Visually block out and manage time.</p>
                    <h6>Auto tracker </h6>
                    <p>Track apps and websites you use.</p>
                    <h6>Kiosk </h6>
                    <p>Clock in from a shared device.</p>
            </div>
                  <div>
                     <img src="https://clockify.me/assets/images/feature-time-tracker-methods.svg" alt="" />
                  </div>
            </div>

            <div className={styles.Listflex}>
            <div className={styles.ListItems}>
               <h5> REPORTING</h5> 
                 <h6>Reports</h6>
                    <p>Analyze and export tracked time.</p>
                    <h6>Activity</h6>
                    <p>See who works on what.</p>
                    <h6>Rates</h6>
                    <p>See earnings, cost, and profit.</p>
                    <h6>Progress</h6>
                    <p>Track project estimates and budget.</p>
                    <h6>Location</h6>
                    <p>See visited sites and routes.</p>
            </div>
             <div>
            <img src="https://clockify.me/assets/images/feature-time-reporting-activity.svg" alt="" />
        </div>
            </div>



        <div className={styles.Listflex}>
            <div className={styles.ListItems}>
               <h5>MANAGEMENT</h5> 
                 <h6>Scheduling </h6>
                    <p>Schedule work, assignments, and shifts.</p>
                    <h6>Time off </h6>
                    <p>Manage leaves and holidays.</p>
                    <h6>Approval </h6>
                    <p>Submit and approve timesheets.</p>
                    <h6>Invoicing </h6>
                    <p>Create invoices from billable time.</p>
                    <h6>Expenses</h6>
                    <p>Record project expenses and fees.</p>
            </div>
        <div>
            <img src="https://clockify.me/assets/images/feature-team-scheduling.svg" alt="" />
        </div>

        </div>

        <div>
            <HeroButton router={"/features"} label="SEE ALL FEATURES"/>
        </div>
        </div>
    </div>
 </div>
  )
}

export default FeaturesSec;





