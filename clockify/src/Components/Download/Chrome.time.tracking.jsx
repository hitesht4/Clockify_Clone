import React,{useState} from "react";
import "./styles/ChromeTimeTracking.css";
import { Link } from "react-router-dom";
import { ReactComponent as ChromeSvg } from "../../assets/images/chrome-store.svg";
import { ReactComponent as SignedSvg } from "../../assets/images/signed-up-icon.svg";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar"

const ChromeTimeTracking = () => {

  const [dark, setDark] = useState(false);

  const changeImage = () => {
    setDark(!dark);
  };


  return (
    
    <div className="chrome_container">
      <Navbar />
      <div className="chrome_header_section">
        <h1 className="chrome_header_heading">
          Free Chrome time tracking extension
        </h1>
        <p className="chrome_header_para">
          Track time from anywhere in your browser. Clockify's Chrome time
          tracker allows you to track how much time you spend working on
          projects with just one click.
        </p>
        <Link
          className="chrome_svg_link"
          to="/chrome-time-tracking"
        >
          <ChromeSvg />
        </Link>
        <br />
        <span className="chrome_hero_text" style={{ color: " #78909C" }}>
          <SignedSvg />
          280,000+ users
        </span>
        <div className="chrome_switch_div">
          <div>
            <img
              src={
                !dark
                  ? "https://clockify.me/assets/images/extension-time-tracker-light.png"
                  : "https://clockify.me/assets/images/extension-time-tracker-dark.png"
              }
              alt="chrome_switch_img"
            />
          </div>
          <div className="chrome_input_switch">
            <label className="chrome_switch" for="dark-mode-switch">
              <input
                type="checkbox"
                id="dark-mode-switch"
                onClick={changeImage}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>


      <div className="chrome_middle_section">
        <section>
          <h2 className="chrome_middle_heading">
            Tracking time with Clockify's Chrome extension
          </h2>
          <div className="chrome_setups">
            <div className="step_div">
              <span className="step">Step 1</span>
              <h3>Create Clockify account</h3>
              <p className="step_para">
                <Link className="step_link" to="/signup">
                  Sign up here for free
                </Link>
              </p>
            </div>
            <div className="step_div">
              <span className="step">Step 2</span>
              <h3>Install time tracking extension for Chrome</h3>
              <p className="step_para">
                <Link
                  className="step_link"
                  to="/chrome-time-tracking"
                >
                  Get Clockify Time Tracker on the Chrome Web Store
                </Link>
              </p>
            </div>
            <div className="step_div">
              <span className="step">Step 3</span>
              <h3>Log in</h3>
              <p className="step_para">
                Open the extension, click "Log In" button, and finish the log in
                process via the web page.
              </p>
              <p className="step-note">
                Tip: Click on the extension icon in Chrome, and then on the pin
                icon next to Clockify to make it visible all the time.
              </p>
              <img
                className="blue-shadow"
                src="https://clockify.me/assets/images/chrome-time-tracking-extension-pin.png"
                alt="Chrome time tracking extension - pin clockify"
              />
            </div>
            <div className="step_div">
              <span className="step">Step 4</span>
              <h3>Start the timer</h3>
              <p className="step_para">
                Type what you're working on and start the timer (or press
                Ctrl+Shift+U).
              </p>
              <img
                className="step_img"
                src="https://clockify.me/assets/images/chrome-time-tracking-extension-timer.png"
                alt="Chrome time tracking extension - start timer"
              />
            </div>
            <div className="step_div">
              <span className="step">Step 5</span>
              <h3>Enter details</h3>
              <p className="step_para">
                You can add a project, task, tag, and billability status to your
                time entry.
              </p>
              <img
                className="step_img"
                src="https://clockify.me/assets/images/chrome-time-tracking-extension-details.png"
                alt="Chrome time tracking extension - enter details"
              />
            </div>
            <div className="step_div">
              <span className="step">Step 6</span>
              <h3>Continue tracking</h3>
              <p className="step_para">
                Continue timer for an activity by clicking on the entry in the
                list.
              </p>
              <img
                className="step_img"
                src="https://clockify.me/assets/images/chrome-time-tracking-extension-continue.png"
                alt="Chrome time tracking extension - continue tracking"
              />
            </div>
            <div className="step_div">
              <span className="step">Step 7</span>
              <h3>Start timer from selected text</h3>
              <p className="step_para">
                Select any text, right-click on it, and start the timer with the
                selected text as description.
              </p>
              <img
                className="blue-shadow"
                src="https://clockify.me/assets/images/chrome-time-tracking-extension-right-click.png"
                alt="Chrome time tracking extension - start timer from selected text"
              />
            </div>
            <div className="step_div">
              <span className="step">Step 8</span>
              <h3>Track time within other web apps</h3>
              <p className="step_para">
                Clockify timer button will appear in your favorite productivity
                web apps (like Trello, JIRA, Gmail, Google Calendar, Github),
                making time tracking extremely easy.
              </p>
              <Link className="step_link" to="/">
                <img
                  className="blue-shadow"
                  src="https://clockify.me/assets/images/integrations/time-tracking-integrations-asana.png"
                  alt="Time tracking integration for nonprofits and NGOs in Asana"
                />
              </Link>
              <Link className="step_link" to="/">
                <img
                  className="blue-shadow"
                  src="https://clockify.me/assets/images/integrations/time-tracking-integrations-trello.png"
                  alt="Time tracking integration for nonprofits and NGOs in Trello"
                />
              </Link>
              <Link className="step_link" to="/">
                <img
                  className="blue-shadow"
                  src="https://clockify.me/assets/images/integrations/time-tracking-integrations-todoist.png"
                  alt="Time tracking integration for nonprofits and NGOs in Todoist"
                />
              </Link>
            </div>
            <div className="step_div">
              <span className="step">Step 9</span>
              <h3>Enable reminders and idle detection</h3>
              <p className="step_9_para">
                In order to keep your time logs super accurate, go to
                extension's Settings and turn on additional time tracking
                features:
              </p>
              <ul>
                <li>
                  <b>Reminders</b>: receive a notification when you forget to
                  start the timer
                </li>
                <li>
                  <b>Idle detection</b>: discard inactive time that you've spent
                  away from the computer
                </li>
                <li>
                  <b>Automatic clock-in and clock-out</b>: automatically
                  start/stop the timer when you start/finish your work day (ie.
                  when you open/close the browser)
                </li>
                <li>
                  <Link className="step_link" to="/chrome-time-tracking">
                    <b>Pomodoro timer</b>
                  </Link>
                  : Work in regular work/break intervals using the Pomodoro
                  technique
                </li>
              </ul>
              <img
                className="step-9_img"
                src="https://clockify.me/assets/images/chrome-time-tracking-extension-settings.png"
                alt="Chrome time tracking extension - idle detection, reminders, and automatic clock-out"
              />
            </div>
            <div className="step_div">
              <span className="step">Step 10</span>
              <h3>Run reports and manage projects</h3>
              <p className="step10_para">
                In the <Link to="/chrome-time-tracking">web version</Link>, you can edit past
                entries, analyze time, manage projects, invite people, review
                timesheets, and export reports.
              </p>
              <img
                src="https://clockify.me/assets/images/feature-works-everywhere-reports.png"
                alt="Web version of Clockify app"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="bottom_section">
        <h2>Chrome time tracker features</h2>
        <div className="bottom_flex">
          <span className="bottom_box">
            <h3>Timer shortcut</h3>
            <p>Start/stop timer from anywhere with Ctrl+Shift+U.</p>
          </span>
          <span className="bottom_box">
            <h3>Automatic sync</h3>
            <p>Start timer on web and stop it from your phone.</p>
          </span>
          <span className="bottom_box">
            <h3>Pomodoro timer</h3>
            <p>Work in regular work/break intervals.</p>
          </span>
          <span className="bottom_box">
            <h3>Integrations</h3>
            <p>
              Start timer within{" "}
              <Link to="/chrome-time-tracking">Trello, Asana, Jira, Todoist, etc.</Link>
            </p>
          </span>
          <span className="bottom_box">
            <h3>Track from text</h3>
            <p>Select any text and start timer for it from right-click menu.</p>
          </span>
          <span className="bottom_box">
            <h3>Default project</h3>
            <p>Start the timer with a project already selected.</p>
          </span>
          <span className="bottom_box">
            <h3>Idle detection</h3>
            <p>Remove time you've been inactive or away from computer.</p>
          </span>
          <span className="bottom_box">
            <h3>Auto start/stop</h3>
            <p>Automatically start/stop timer when you open/close browser.</p>
          </span>
          <span className="bottom_box">
            <h3>Reminders</h3>
            <p>Get notifications when you forget to track time.</p>
          </span>
        </div>
      </section>

      <section className="appstore">
      <Link to="/chrome-time-tracking">
       <ChromeSvg />
      </Link><br/>
      <Link className="appstore__signup" to="/signup">Don't have an account? Sign up free</Link>
    </section>
    <Footer/>
    
    </div>
  );
};

export default ChromeTimeTracking;
