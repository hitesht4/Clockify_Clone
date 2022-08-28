import Approval from "../Pages/Managment/Approval"
import Expenses from "../Pages/Managment/Expenses"
import Invoicing from "../Pages/Managment/Invoicing"
import Scheduling from "../Pages/Managment/Scheduling"
import Team from "../Pages/Managment/Team"
import TimeOff from "../Pages/Managment/TimeOff"
import Activity from "../Pages/Reporting/Activity"
import Dashboard from "../Pages/Reporting/Dashboard"
import Projects from "../Pages/Reporting/Projects"
import Reports from "../Pages/Reporting/Reports"
import Apps from "../Pages/Timekeeping/Apps"
import Calender from "../Pages/Timekeeping/Calender"
import Integrations from "../Pages/Timekeeping/Integrations"
import Kiosk from "../Pages/Timekeeping/Kiosk"
import Timesheet from "../Pages/Timekeeping/Timesheet"
import TimeTracker from "../Pages/Timekeeping/TimeTracker"
import styles from "../FeaturesStyle/Hashlinkpages.module.css"
export const HashlinkPages=()=>{
    return (
        <div className={styles.main}>
             <section id="timetracker">
                <TimeTracker/>
            </section>
            <section id="apps">
                <Apps/>
            </section>
            <section id="calender">
                <Calender/>
            </section>
            <section id="kiosk">
                <Kiosk/>
            </section>
            <section id="timesheet">
                <Timesheet/>
            </section>
           <section id="integrations">
            <Integrations/>
           </section>
            <section id="dashboard">
                <Dashboard/>
            </section>
            <section id="activity">
                <Activity/>
            </section>
            <section id="projects">
                <Projects/>
            </section>
            <section id="reports">
                <Reports/>
            </section>
            <section id="approval">
                <Approval/>
            </section>
            <section id="expenses">
                <Expenses/>
            </section>
            <section id="invoicing">
                <Invoicing/>
            </section>
            <section id="scheduling">
                <Scheduling/>
            </section>
            <section id="team"> 
                <Team/>
            </section>
            <section id="timeoff">
                <TimeOff/>
            </section>   
        </div>
    )
}