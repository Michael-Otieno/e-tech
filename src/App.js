
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './mcomponents/homepage/Homepage';
import Signup from './mcomponents/signup/Signup';
import Login from './mcomponents/login/Login';
import Dashboard from './mcomponents/dashboard/Dashboard';
import Certification from './mcomponents/certification/Certification';
import Content from './mcomponents/content/Content';
import Entrepreneur from './mcomponents/entrepreneur/Entrepreneur';
import Feedback from './mcomponents/feedback/Feedback';
import Trainings from './mcomponents/trainings/Trainings';
import Summary from './mcomponents/summary/Summary';
import Subscribe from './mcomponents/subscribe/Subscribe';
import CompanyDetails from './mcomponents/companyDetails/CompanyDetails';
import CompanyLogin from './mcomponents/companyLogin/CompanyLogin';
import CompanyDashboard from './mcomponents/companyDashboard/CompanyDashboard';
// import Footer from './mcomponents/footer/Footer';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/certification' element={<Certification />} />
        <Route path='/content' element={<Content />} />
        <Route path='/entreprenuer' element={<Entrepreneur />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/trainings' element={<Trainings />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/company-signup' element={<Subscribe />} />
        <Route path='/company-details' element={<CompanyDetails />} />
        <Route path='/company-login' element={<CompanyLogin />} />
        <Route path='/company-dashboard' element={<CompanyDashboard />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
