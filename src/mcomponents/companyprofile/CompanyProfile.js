// import "./Userdetails.css";
import user from "../../imgs/user.png";


function CompanyProfile(){
  return (
    <div className="user-details">
      
      <img className="user-icon" src={user} alt="user" />
      <p>E-tech</p>
    </div>
  );
}

export default CompanyProfile;
