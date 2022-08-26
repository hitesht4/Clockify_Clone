import { Routes,Route } from 'react-router-dom';
import './App.css';
import ChromeTimeTracking from './Components/Download/Chrome.time.tracking';
import Navbar from './Components/Home/Navbar';
import Download from './Pages/Download';
import { Navbar } from './Components/Features/Navbar/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import DownloadPage from '../src/Components/Download/DownloadPage';
import TimerApp from './Pages/TimerApp';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/features' element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/> 
        <Route path="/chrome-time-tracking" element={<ChromeTimeTracking />} />
        <Route path="/downloads" element={<DownloadPage/>}/> 
        <Route path="/timerapp" element={<TimerApp/>} /> 
      </Routes>
    </div>
    <ToastContainer/>
    </>

  );
}

export default App;
