
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './mcomponents/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<div>Signup</div>} />
      </Routes>
      
    </div>
  );
}

export default App;
