import React from "react";
import "./styles/DownloadPage.css";
import { ReactComponent as ChromeSvg } from "../../assets/images/chrome-store.svg";
import { ReactComponent as FirefoxSvg } from "../../assets/images/firefox-store.svg";
import { ReactComponent as MacSvg } from "../../assets/images/download-app-mac.svg";
import { ReactComponent as WindowsSvg } from "../../assets/images/download-app-windows.svg";
import { ReactComponent as LinuxSvg } from "../../assets/images/download-app-linux.svg";
import { ReactComponent as IosSvg } from "../../assets/images/app-store-ios.svg";
import { ReactComponent as AndroidSvg } from "../../assets/images/play-store-android.svg";
import { ReactComponent as SignedSvg } from "../../assets/images/signed-up-icon.svg";

const DownloadPage = () => {
    return (
        <div className="download_main">
          <div className="download_header">
            <h1 className="donload_header_title">Time tracking apps</h1>
            <p>
              Install Clockify and track time from anywhere — everything is synced
              online.
            </p>
            <p className="apps__header__download">
              <a style={{textDecoration:"none"}} href="chrome-time-tracking">Chrome</a> &nbsp;•&nbsp;{" "}
              <a style={{textDecoration:"none"}} href="firefox-time-tracking">Firefox</a> &nbsp;•&nbsp;{" "}
              <a style={{textDecoration:"none"}} href="/edge-time-tracking">Edge</a> &nbsp;•&nbsp;{" "}
              <a style={{textDecoration:"none"}} href="mac-time-tracking">Mac</a> &nbsp;•&nbsp;{" "}
              <a style={{textDecoration:"none"}} href="/windows-time-tracking">Windows</a> &nbsp;•&nbsp;{" "}
              <a style={{textDecoration:"none"}} href="/linux-time-tracking">Linux</a> &nbsp;•&nbsp;{" "}
              <a style={{textDecoration:"none"}} href="/android-time-tracking">Android</a> &nbsp;•&nbsp;{" "}
              <a style={{textDecoration:"none"}} href="/iphone-time-tracking">iOS</a>
            </p>
            <p className="apps__header__download">
              <span data-tip="Stop timer from tracking time you spend away from your computer.  Mac, Windows, Chrome" className="apps__feature-box tooltip">
                Idle detection
                <span className="tooltiptext">
                  Stop timer from tracking time you spend away from your computer.
                  <br />
                  <span style={{color:"#A5A5A5", fontSize: "11px"}}>
                    Mac, Windows, Chrome
                  </span>
                </span>
              </span>
              <span data-tip=" Automatically start or stop the timer when you turn on your
                  computer or browser.  Mac, Windows, Chrome" className="apps__feature-box tooltip">
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
              <span data-tip="Track time even while offline.  Mac, Windows, Linux, Android, iOS" className="apps__feature-box tooltip">
                Offline mode
                <span className="tooltiptext">
                  Track time even while offline.
                  <br />
                  <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                    Mac, Windows, Linux, Android, iOS
                  </span>
                </span>
              </span>
              <span data-tip="Automatically preselect some project when starting a timer.  Mac, Windows, Chrome, iOS, Android" className="apps__feature-box tooltip">
                Default project
                <span className="tooltiptext">
                  Automatically preselect some project when starting a timer.
                  <br />
                  <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                    Mac, Windows, Chrome, iOS, Android
                  </span>
                </span>
              </span>
              <span data-tip="Get notification when you forget to start a timer.  Mac, Windows, Chrome" className="apps__feature-box tooltip">
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
              <span data-tip="Get notifications when it's time to take a break.   Mac, Chrome" className="apps__feature-box tooltip">
                Pomodoro timer
                <span className="tooltiptext">
                  Get notifications when it's time to take a break.
                  <br />
                  <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                    Mac, Chrome
                  </span>
                </span>
              </span>
              <span data-tip=" Track how much time you spend in other apps on your computer.  Mac, Windows, Linux" className="apps__feature-box tooltip">
                Auto tracker
                <span className="tooltiptext">
                  Track how much time you spend in other apps on your computer.
                  <br />
                  <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                    Mac, Windows, Linux
                  </span>
                </span>
              </span>
              <span data-tip="Record your expenses and attach receipts. Android, iOS" className="apps__feature-box tooltip">
                Expenses
                <span className="tooltiptext">
                  Record your expenses and attach receipts.
                  <br />
                  <span style={{ color: "#A5A5A5", fontSize: "11px" }}>
                    Android, iOS
                  </span>
                </span>
              </span>
              <span data-tip="Request time off and see your balance.  Android, iOS" className="apps__feature-box tooltip">
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
              <a className="browser_a" href="/chrome-time-tracking">
                <ChromeSvg />
              </a>
              <a className="browser_a" href="/firebox-time-tracking">
                <FirefoxSvg />
              </a>
            </div>
          </section>
    
          <section className="download_desktop_app">
            <div className="download_desktoop_app_first">
              <img
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
              <a className="mac_time_tracking" href="/mac-time-tracking">
                <MacSvg />
              </a>
              <a className="mac_time_tracking" href="/windows-time-tracking">
                <WindowsSvg />
              </a>
              <br />
              <a className="mac_time_tracking" href="/linux-time-tracking_3">
                <LinuxSvg />
              </a>
            </div>
          </section>
    
          <section className="download_desktop_app">
            <div className="download_desktoop_app_first">
              <img
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
              <a className="mac_time_tracking" href="/mac-time-tracking">
                <IosSvg />
              </a>
              <a className="mac_time_tracking" href="/windows-time-tracking">
                <AndroidSvg />
              </a>
            </div>
          </section>
    
          <section className="download_desktop_app">
            <div className="download_desktoop_app_first">
              <img
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
              <a className="mac_time_tracking" href="/help/time-tracking/kiosk">
                Learn more
              </a>
            </div>
          </section>
    
          <section className="download_chat_app">
            <div className="download_chat_app_first">
              <img
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
              <a className="mac_time_tracking" href="/mac-time-tracking">
                <IosSvg />
              </a>
              <a className="mac_time_tracking" href="/windows-time-tracking">
                <AndroidSvg />
              </a>
              <br />
              <a className="mac_time_tracking" href="/linux-time-tracking_3">
                <MacSvg />
              </a>
              <a className="mac_time_tracking" href="/linux-time-tracking_3">
                <WindowsSvg />
              </a>
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
              <a href="https://app.clockify.me/signup">
                <button className="download_sign_up__button">
                  Create FREE account
                </button>
              </a>
              <a className="customer-link" target="_blank" href="/customers">
                <p className="hero__text--signed-up-get-started">
                  <SignedSvg />
                  <span className="NumberOfUsers">
                    136,179 people signed up last month
                  </span>
                </p>
              </a>
            </div>
          </section>
        </div>
      );
    };

export default DownloadPage