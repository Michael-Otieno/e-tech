import "./Entrepreneur.css";
import entreback from "../../imgs/entreback.png";
import cloud from "../../imgs/cloud.png";
import errorIcon from "../../imgs/error.png";
import back from "../../imgs/Back.png";
import { Link } from "react-router-dom";

function Entrepreneur() {
  return (
    <div className="entreprenuer">
      <div className="entre">
        <div>
          <h5>Entrepreneurship</h5>
          <div className="entreback">
            <img src={entreback} alt="" />
          </div>
          <Link to="/content">
            <img className="back" src={back} alt="" />
          </Link>
        </div>
      </div>
      <div className="chapters">
        <div>
          <h5>Chapters</h5>
          <div className="chapter">
            <div className="chapter-img">
              <img src={cloud} alt="" />
              <p>1</p>
            </div>
            <div className="chapter-img">
              <img src={cloud} alt="" />
              <p>2</p>
            </div>
            <div className="chapter-img">
              <img src={cloud} alt="" />
              <p>3</p>
            </div>
            <div className="chapter-img">
              <img src={cloud} alt="" />
              <p>4</p>
            </div>
          </div>
        </div>

        <p className="e-error">
          <img src={errorIcon} alt="" />
          <span>click on a chapter to download</span>
        </p>
      </div>
    </div>
  );
}
export default Entrepreneur;
