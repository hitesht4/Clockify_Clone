import { BrowserRouter } from "react-router-dom"
import { HashlinkPages } from "../Routes/Hashlinkpages"
import {HashLink} from "react-router-hash-link"
import styles from "../FeaturesStyle/Navbar.module.css"
export const Navbar=()=>{
    return (
       
        <div>
            <h2 style={{fontSize:"40px",padding:"25px"}}>Features</h2>
            <div className={styles.main}>
                
                <div className={styles.options}><h4>TIME KEEPING</h4>
                <div className={styles.optionsbox}>
                    
                    <HashLink to="/features/#timetracker"><button>Time Tracker</button></HashLink>
                    <HashLink to='/features/#apps'><button>Apps</button></HashLink>
                <HashLink to='/features/#calender'><button>Calender</button></HashLink>
                <HashLink to='/features/#kiosk'><button>Kiosk</button></HashLink>
                <HashLink to='/features/#timesheet'><button>Time Sheet</button></HashLink>
                <HashLink to="/features/#integrations"><button>Intergrations</button></HashLink>
                </div>
                </div>
                <div className={styles.optionsreport}>
                <h4>REPORTING</h4>
                <div className={styles.optionsboxreport}>
                  
                    <HashLink to='/features/#activity'><button>Activity</button></HashLink>
                <HashLink to='/features/#dashboard'><button>Dashboard</button></HashLink>
                <HashLink to='/features/#projects'><button>Projects</button></HashLink>
                <HashLink to='/features/#reports'><button>Reports</button></HashLink>
                </div>
                </div>
                <div className={styles.options}>
                <h4>MANAGEMENT</h4>
                <div className={styles.optionsbox}>
                    
                    <HashLink to='/features/#approval'><button>Approval</button></HashLink>
                <HashLink to='/features/#expenses'><button>Expenses</button></HashLink>
                <HashLink to='/features/#invoicing'><button>Invoicing</button></HashLink>
                <HashLink to='/features/#scheduling'><button>Scheduling</button></HashLink>
                <HashLink to='/features/#team'><button>Team</button></HashLink>
                <HashLink to='/features/#timeoff'><button>Time Off</button></HashLink>
                </div>
                </div>
               
                
            </div>
            <div>
                <HashlinkPages/>
            </div>
        </div>
      
    )
}