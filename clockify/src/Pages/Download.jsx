import React from 'react';
import { Routes,Route } from 'react-router-dom';
import ChromeTimeTracking from '../Components/Download/Chrome.time.tracking';
import DownloadPage from '../Components/Download/DownloadPage';
import "./Styles/Download.css";

const Download = () => {
  return (
    <Routes>
      <Route path="/" element={<DownloadPage/>} />
      <Route path="/chrome-time-tracking" element={<ChromeTimeTracking />} />
    </Routes>
  )
}

export default Download;