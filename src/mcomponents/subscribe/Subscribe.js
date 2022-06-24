import './Subscribe.css';

import { Link } from "react-router-dom";

import logo from "../../imgs/investment.png";


function Subscribe(){
  return (
    <div className='subscribe'>
      <div className='subscribe-review'>
        <h2>Kindly review our terms and conditions before subscribing.</h2>
        <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
        </p>
        <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
        </p>
        <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        </p>
      </div>
      <div>
        <h4>Subscribe and give your employees access to:</h4>

        <div className="form">
        <div className="form-logo">
          <img className="signup-img" src={logo} alt="" />
          <h2>Sign up</h2>
          <p></p>
        </div>
       
        <div className="submit">
          <Link to="/login">
            <input type="Submit" value="Sign up" />
          </Link>
          <p>
            <span>Already signed up?</span>
            <Link className="link" to="/login">Log in</Link>
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Subscribe;