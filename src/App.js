import logo from './logo.svg';
import './App.css';
import Sidenav from './components/SideNav/Sidenav';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Task from './pages/Task/Task';
import Topnav from './components/TopNav/Topnav';

function App() {
  return (
    <Router>
      <Topnav />
      <div className='container'>
        
        <Sidenav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/task' element={<Task/>} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
