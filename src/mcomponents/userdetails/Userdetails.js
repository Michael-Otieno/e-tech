import "./Userdetails.css";
import tests from "../../imgs/tests.png";


function Userdetails(){
  return (
    <div className="user-details">
      
      <img className="user-icon" src={tests} alt="user" />
      <p>John</p>
    </div>
  );
}

export default Userdetails;
