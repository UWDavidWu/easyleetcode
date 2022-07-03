import logo from './logo.svg';
import './App.css';
import Sidenav from './components/SideNav/Sidenav';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Task from './pages/Task/Task';
import Topnav from './components/TopNav/Topnav';
import Recommend from './pages/Recommend/Recommend';
import Resources from './pages/Resources/Resources';
import Setting from './pages/Setting/Setting';
import Question from './pages/Question/Question';
import Youtube from './pages/Youtube/Youtube';





function App() {
  return (
    <Router>
      {/* <Topnav /> */}
      <div className='container'>
        
        <Sidenav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/question' element={<Question/>} />
          <Route path='/task' element={<Task/>} />
          <Route path='/recommend' element={<Recommend/>} />
          <Route path='/resources' element={<Resources/>} />
          <Route path='/youtube' element={<Youtube/>} />
          <Route path='/setting' element={<Setting/>} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
