import Styles from '../Settings/Settings.module.css'

const Settings=()=>{
    return(
        <div className='babubhaiya'>
        <div className={Styles.top}>
            <h3>Company logo</h3>
            <p>Company logo will appear in shared reports and branded PDF exports. Formats: png, jpg, gif. Max size: 1 MB.</p>
        </div>
        <div className={Styles.logo}>
        <img className="got" src="https://image.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819879.jpg" alt="settings-logo" />
        <label for="files">UPLOAD IMAGE</label>
        <input id='files' className={Styles.inpbtn} type="file"/>
        </div>

        <div className={Styles.workspace}>
            <h3>Workspace name</h3>
            <input type="text" />
        </div>
        <div className={Styles.workspace}>
            <h3>Timesheet</h3>
            <p>Enter time on tasks and projects using a weekly timesheet view. While activated, project is a required field for the whole workspace.</p>
        </div>
        <div className={Styles.workspace}>
        <h3>Kiosk</h3>
            <p>Allow employees to clock in and out from designated devices.</p> 
        </div>
        <div className={Styles.projects}>
            <h3>New projects are by default</h3>
            <p>When you create a project, make it public so it's available to all users, and billable so its time entries are set as billable.</p>
            <div>
                <input type="radio" /><span>Non-billable</span>
                <input type="radio" /><span>Billable</span>
            </div>
            <div>
                <input type="radio" /><span>Public</span>
                <input type="radio" /><span>Private</span>
            </div>
        </div>
        <div className={Styles.organize}>
            <h3>Organize time by</h3>
            <p>Choose how you wish to group time, and set up custom terms and hierarchy.</p>
            <select name="" id="">
                <option value="">Client</option>
                <option value="">Department</option>
                <option value="">Category</option>
                <option value="">Custom</option>
            </select>
            <br />
            <select name="" id="">
            <option value="">Project</option>
                <option value="">Location</option>
                <option value="">Job</option>
                <option value="">Custom...</option>
            </select>
            <br />
            <select name="" id="">
            <option value="">Task</option>
                <option value="">Activity</option>
                <option value="">Job Area</option>
                <option value="">Custom...</option>
            </select>
        </div>
        <div className={Styles.organize}>
            <h3>Duration format</h3>
            <p>Display time in clock format (with or without seconds).</p>
            <select name="" id="">
                <option value="">Full(hh:mm:ss)</option>
                <option value="">Compact(h:mm)</option>
                <option value="">Decimel(h.hh)</option>
            </select>
        </div>
        <div className={Styles.organize}>
            <h3>Working Days</h3>
            <p>Default working days for all new members (you can override working days on member profile).</p>
            <a href="#home">Mon,Tue,Wed,Thu,Fri</a>
        </div>
        <div className={Styles.organize}>
            <h3>Project and task favorites</h3>
            <p>Let people mark their most used projects and tasks as favorite so they appear at the top of the list when tracking time.</p>
        </div>
        <div className={Styles.workspace}>
            <h3>Workspace billable rate</h3>
            <p>Default value of each billable hour when there’s no user or project hourly rate.</p>
            <input type="text" />
            <button>Change</button>
        </div>
        <div className={Styles.currency}>
            <h3>Currency</h3>
            <p>The currency in which the billable and cost amounts will be displayed in reports.</p>
            <input type="text" name="" id="" placeholder='USD'/>
        </div>
        </div>
    )
}

export default Settings;