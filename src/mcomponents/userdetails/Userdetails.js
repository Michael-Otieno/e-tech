import "./Userdetails.css";
import tests from "../../imgs/tests.png";


function Userdetails(){
  return (
    <div className="user-details">
      <h3>Company name</h3>
      <img className="user-icon" src={tests} alt="user" />
      <p>Anonymous</p>
    </div>
  );
}

export default Userdetails;
