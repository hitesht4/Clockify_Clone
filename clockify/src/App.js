import { Routes,Route } from 'react-router-dom';
import './App.css';
import Download from './Pages/Download';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>    
      </Routes>
      {/* <Download/> */}
    </div>
  );
}

export default App;
