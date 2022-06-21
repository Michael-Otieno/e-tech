
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './mcomponents/homepage/Homepage';
import Signup from './mcomponents/signup/Signup';
import Login from './mcomponents/login/Login';
import Dashboard from './mcomponents/dashboard/Dashboard';
import History from './mcomponents/history/History';
import Content from './mcomponents/content/Content';
import Entrepreneur from './mcomponents/entrepreneur/Entrepreneur';
import Feedback from './mcomponents/feedback/Feedback';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/history' element={<History />} />
        <Route path='/content' element={<Content />} />
        <Route path='/entreprenuer' element={<Entrepreneur />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
      
    </div>
  );
}

export default App;
