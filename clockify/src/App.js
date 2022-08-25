import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Features/Navbar/Navbar';

import Download from './Pages/Download';

import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import DownloadPage from '../src/Components/Download/DownloadPage';
import TimerApp from './Pages/TimerApp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/features' element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/> 
        <Route path="/downloads" element={<DownloadPage/>}/> 
        <Route path="/timerapp" element={<TimerApp/>} /> 
      </Routes>
    </div>
  );
}

export default App;
