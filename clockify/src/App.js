import { Routes,Route } from 'react-router-dom';
import './App.css';
import ChromeTimeTracking from './Components/Download/Chrome.time.tracking';

import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import DownloadPage from '../src/Components/Download/DownloadPage';
import TimerApp from './Pages/TimerApp';
import { ToastContainer } from 'react-toastify';
import {  Navbarr } from './Components/Features/Navbar/Navbarr';
import Slidebar from './Components/Dashboard/dash/Slidebar';


function App() {
  return (
    <>

    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/features' element={<Navbarr/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/> 
        <Route path="/chrome-time-tracking" element={<ChromeTimeTracking />} />
        <Route path="/downloads" element={<DownloadPage/>}/> 
        {/* <Route path="/sideb" element={<Dashboard/>} /> */}
        <Route path='/dashboard' element={<Slidebar/>}>
               <Route path=":topics" element={<Slidebar/>}></Route>
          </Route> 
      </Routes>
    </div>
    <ToastContainer/>
   
     
    </>
  );
}

export default App;
