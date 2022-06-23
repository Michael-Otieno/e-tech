import "./Userdetails.css";
import user from "../../imgs/user.png";


function Userdetails(){
  return (
    <div className="user-details">
      
      <img className="user-icon" src={user} alt="user" />
      <p>John</p>
    </div>
  );
}

export default Userdetails;
