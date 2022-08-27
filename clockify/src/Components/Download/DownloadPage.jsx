import React from "react";
import "./styles/DownloadPage.css";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";
import { ReactComponent as ChromeSvg } from "../../assets/images/chrome-store.svg";
import { ReactComponent as FirefoxSvg } from "../../assets/images/firefox-store.svg";
import { ReactComponent as MacSvg } from "../../assets/images/download-app-mac.svg";
import { ReactComponent as WindowsSvg } from "../../assets/images/download-app-windows.svg";
import { ReactComponent as LinuxSvg } from "../../assets/images/download-app-linux.svg";
import { ReactComponent as IosSvg } from "../../assets/images/app-store-ios.svg";
import { ReactComponent as AndroidSvg } from "../../assets/images/play-store-android.svg";
import { ReactComponent as SignedSvg } from "../../assets/images/signed-up-icon.svg";
import Footer from '../Home/Footer';

const DownloadPage = () => {
  return (
    <>
      <Navbar />
      <div className="download_main">
        <div className="download_header">
          <h1 className="donload_header_title">Time tracking apps</h1>
          <p>
            Install Clockify and track time from anywhere — everything is synced
            online.
          </p>
          <p className="appLink__header__download">
            <Link style={{ textDecoration: "none" }} to="/chrome-time-tracking">
              Chrome
            </Link>{" "}
            &nbsp;•&nbsp;{" "}
            <Link style={{ textDecoration: "none" }} to="/downloads">
              Firefox
            </Link>{" "}
            &nbsp;•&nbsp;{" "}
            <Link style={{ textDecoration: "none" }} to="/downloads">
              Edge
            </Link>{" "}
            &nbsp;•&nbsp;{" "}
            <Link style={{ textDecoration: "none" }} to="/downloads">
              Mac
            </Link>{" "}
            &nbsp;•&nbsp;{" "}
            <Link style={{ textDecoration: "none" }} to="/downloads">
              Windows
            </Link>{" "}
            &nbsp;•&nbsp;{" "}
            <Link style={{ textDecoration: "none" }} to="/downloads">
              Linux
            </Link>{" "}
            &nbsp;•&nbsp;{" "}
            <Link style={{ textDecoration: "none" }} to="/downloads">
              Android
            </Link>{" "}
            &nbsp;•&nbsp;{" "}
            <Link style={{ textDecoration: "none" }} to="/downloads">
              iOS
            </Link>
          </p>
          <p className="apps__header__download">
            <span className="apps__feature-box">
              Idle detection
              <span className="tooltiptext">
                Stop timer from tracking time you spend away from your computer.
                <br />
                <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                  Mac, Windows, Chrome
                </span>
              </span>
            </span>

            <span className="apps__feature-box">
              Auto start/stop
              <span className="tooltiptext">
                Automatically start or stop the timer when you turn on your
                computer or browser.
                <br />
                <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                  Mac, Windows, Chrome
                </span>
              </span>
            </span>
            <span className="apps__feature-box">
              Offline mode
              <span className="tooltiptext">
                Track time even while offline.
                <br />
                <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                  Mac, Windows, Linux, Android, iOS
                </span>
              </span>
            </span>
            <span className="apps__feature-box">
              Default project
              <span className="tooltiptext">
                Automatically preselect some project when starting a timer.
                <br />
                <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                  Mac, Windows, Chrome, iOS, Android
                </span>
              </span>
            </span>
            <span className="apps__feature-box">
              Reminders
              <span className="tooltiptext">
                Get notification when you forget to start a timer.
                <br />
                <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                  Mac, Windows, Chrome
                </span>
              </span>
            </span>
            <br />
            <span className="apps__feature-box">
              Pomodoro timer
              <span className="tooltiptext">
                Get notifications when it's time to take a break.
                <br />
                <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                  Mac, Chrome
                </span>
              </span>
            </span>
            <span className="apps__feature-box">
              Auto tracker
              <span className="tooltiptext">
                Track how much time you spend in other apps on your computer.
                <br />
                <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                  Mac, Windows, Linux
                </span>
              </span>
            </span>
            <span className="apps__feature-box">
              Expenses
              <span className="tooltiptext">
                Record your expenses and attach receiptsLink
                <br />
                <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                  Android, iOS
                </span>
              </span>
            </span>
            <span className="apps__feature-box">
              Time off
              <span className="tooltiptext">
                Request time off and see your balance.
                <br />
                <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                  Android, iOS
                </span>
              </span>
            </span>
          </p>
        </div>

        <section className="download_browser_extension">
          <div>
            <img
              className="browser_extension_img"
              src="https://clockify.me/assets/images/clockify-apps-extension.png"
              alt="browser_extension_img"
            />
          </div>
          <div className="browser_extension_second">
            <h2>Browser Extension</h2>
            <p>Track time via extension.</p>
            <Link className="browser_a" to="/chrome-time-tracking">
              <ChromeSvg />
            </Link>
            <Link className="browser_a" to="/downloads">
              <FirefoxSvg />
            </Link>
          </div>
        </section>

        <section className="download_desktop_app">
          <div className="download_desktoop_app_first">
            <img
              className="kiosk_img"
              alt="dewsktop_img"
              src="https://clockify.me/assets/images/clockify-apps-desktop.png"
            />
          </div>
          <div className="download_desktop_app_second">
            <h2>Desktop app</h2>
            <p className="download_desktop_app_para">
              Track time on your computer.
            </p>
            <br />
            <Link className="mac_time_tracking" to="/downloads">
              <MacSvg />
            </Link>
            <Link className="mac_time_tracking" to="/downloads">
              <WindowsSvg />
            </Link>
            <br />
            <Link className="mac_time_tracking" to="/downloads">
              <LinuxSvg />
            </Link>
          </div>
        </section>

        <section className="download_desktop_app">
          <div className="download_desktoop_app_first">
            <img
              className="kiosk_img"
              alt="dewsktop_img"
              src="https://clockify.me/assets/images/clockify-apps-mobile.png"
            />
          </div>
          <div className="download_desktop_app_second">
            <h2>Mobile app</h2>
            <p className="download_desktop_app_para">
              Track time and expenses on your phone.
            </p>
            <br />
            <Link className="mac_time_tracking" to="/downloads">
              <IosSvg />
            </Link>
            <Link className="mac_time_tracking" to="/downloads">
              <AndroidSvg />
            </Link>
          </div>
        </section>

        <section className="download_desktop_app">
          <div className="download_desktoop_app_first">
            <img
              className="kiosk_img"
              alt="dewsktop_img"
              src="https://clockify.me/assets/images/clockify-apps-kiosk.png"
            />
          </div>
          <div className="download_desktop_app_second">
            <h2>Kiosk</h2>
            <p className="download_desktop_app_para">
              Set up a shared time clock kisok on any device.
            </p>
            <br />
            <span
              style={{
                fontSize: "13px",
                color: "#5A6B7B",
                display: "block",
                marginBottom: "18px",
              }}
            >
              TABLET &nbsp;•&nbsp; PHONE &nbsp;•&nbsp; COMPUTER
            </span>
            <Link className="mac_time_tracking" to="/downloads">
              Learn more
            </Link>
          </div>
        </section>

        <section className="download_chat_app">
          <div className="download_chat_app_first">
            <img
              className="kiosk_img"
              alt="dewsktop_img"
              src="https://clockify.me/assets/images/pumble-apps.png"
            />
          </div>
          <div className="download_chat_app_second">
            <h2>Chat app</h2>
            <p className="download_chat_app_para">
              Chat via Pumble app (destop and mobile).
            </p>
            <br />
            <Link className="mac_time_tracking" to="/downloads">
              <IosSvg />
            </Link>
            <Link className="mac_time_tracking" to="/downloads">
              <AndroidSvg />
            </Link>
            <br />
            <Link className="mac_time_tracking" to="/downloads">
              <MacSvg />
            </Link>
            <Link className="mac_time_tracking" to="/downloads">
              <WindowsSvg />
            </Link>
          </div>
        </section>

        <section className="download_signup_section">
          <div className="download_sign_up__content">
            <h2 className="download_sign_up__header">
              Start tracking time with Clockify
            </h2>
            <div className="download_sign_up__bulleted_row">
              <p>24/7 Support</p>
              <p>•</p>
              <p>Cancel Anytime</p>
              <p>•</p>
              <p>Free Forever</p>
            </div>
            <Link to="/signup">
              <button className="download_sign_up__button">
                Create FREE account
              </button>
            </Link>
            <Link className="customer-link" to="/downloads">
              <p className="hero__text--signed-up-get-started">
                <SignedSvg />
                <span className="NumberOfUsers">
                  136,179 people signed up last month
                </span>
              </p>
            </Link>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default DownloadPage;
