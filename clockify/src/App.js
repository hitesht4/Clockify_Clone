import { Routes,Route } from 'react-router-dom';
import './App.css';
import ChromeTimeTracking from './Components/Download/Chrome.time.tracking';
import Navbar from './Components/Home/Navbar';
import Download from './Pages/Download';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/features' element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/> 
        <Route path="/downloads" element={<Download />}/>
        <Route path="/chrome-time-tracking" element={<ChromeTimeTracking />} />
      </Routes>
    </div>
  );
}

export default App;
