
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './mcomponents/homepage/Homepage';
import Signup from './mcomponents/signup/Signup';
import Login from './mcomponents/login/Login';
import Dashboard from './mcomponents/dashboard/Dashboard';
import History from './mcomponents/history/History';
import Content from './mcomponents/content/Content';

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
      </Routes>
      
    </div>
  );
}

export default App;
