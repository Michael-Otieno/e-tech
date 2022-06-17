
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './mcomponents/homepage/Homepage';
import Signup from './mcomponents/signup/Signup';
import Login from './mcomponents/login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
