import React from "react";
import "./styles/ChromeTimeTracking.css";
import { Link } from "react-router-dom";
import { ReactComponent as ChromeSvg } from "../../assets/images/chrome-store.svg";
import { ReactComponent as SignedSvg } from "../../assets/images/signed-up-icon.svg";

const ChromeTimeTracking = () => {
  return (
    <div className="chrome_container">
      <div className="chrome_header_section">
        <h1 className="chrome_header_heading">
          Free Chrome time tracking extension
        </h1>
        <p className="chrome_header_para">
          Track time from anywhere in your browser. Clockify's Chrome time
          tracker allows you to track how much time you spend working on
          projects with just one click.
        </p>
        <Link to="https://chrome.google.com/webstore/detail/clockify-time-tracker/pmjeegjhjdlccodhacdgbgfagbpmccpe">
          <ChromeSvg />
        </Link>
        <br/>
        <span style={{ color: " #78909C" }} class="appstore__signup">
          <SignedSvg />
          280,000+ users
        </span>
        <img src="https://clockify.me/assets/images/extension-time-tracker-light.png" alt="chrome_img" />
      </div>




    </div>
  );
};

export default ChromeTimeTracking;
