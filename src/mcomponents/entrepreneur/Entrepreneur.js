import "./Entrepreneur.css";
import entreback from "../../imgs/entreback.png";
import cloud from "../../imgs/cloud.png";
import errorIcon from "../../imgs/error.png";
import back from "../../imgs/entreLightBack.png";
import { Link } from "react-router-dom";
import Userdetails from "../userdetails/Userdetails";


function Entrepreneur() {
  return (
    <div className="entreprenuer">
      <div className="entre">
        <div>
          <h2>Entrepreneurship Articles</h2>
          <div className="entreback">
            <div className="entre-news">
              <img src={entreback} alt="" />
              <div className="entre-news-para">
                <h5 className="entre-news-title">
                  WHY VENTURE CAPITALS ARE HOTSPOTTING NIGERIA AND KENYAN
                  STARTUPS IN AFRICA
                </h5>
                <p>
                  By Winnie Kamau Nairobi, Kenya: The State of Tech in Africa
                  Report 2021 was launched in Capetown, South Africa. This
                  report got me curious. <br /> <br />
                  By Winnie Kamau Nairobi, Kenya: The State of Tech in Africa
                  Report 2021 was launched in Capetown, South Africa. This
                  report got me curious
                </p>
              </div>
            </div>

            <div className="entre-news">
              <img src={entreback} alt="" />
              <div className="entre-news-para">
                <h5 className="entre-news-title">
                  WHY VENTURE CAPITALS ARE HOTSPOTTING NIGERIA AND KENYAN
                  STARTUPS IN AFRICA
                </h5>
                <p>
                  By Winnie Kamau Nairobi, Kenya: The State of Tech in Africa
                  Report 2021 was launched in Capetown, South Africa. This
                  report got me curious. <br /> <br />
                  By Winnie Kamau Nairobi, Kenya: The State of Tech in Africa
                  Report 2021 was launched in Capetown, South Africa. This
                  report got me curious
                </p>
              </div>
            </div>

            <div className="entre-news">
              <img src={entreback} alt="" />
              <div className="entre-news-para">
                <h5 className="entre-news-title">
                  WHY VENTURE CAPITALS ARE HOTSPOTTING NIGERIA AND KENYAN
                  STARTUPS IN AFRICA
                </h5>
                <p>
                  By Winnie Kamau Nairobi, Kenya: The State of Tech in Africa
                  Report 2021 was launched in Capetown, South Africa. This
                  report got me curious. <br /> <br />
                  By Winnie Kamau Nairobi, Kenya: The State of Tech in Africa
                  Report 2021 was launched in Capetown, South Africa. This
                  report got me curious
                </p>
              </div>
            </div>
          </div>


          <Link to="/content">
            <button className="back">
              <img src={back} alt="" />
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="chapters">
        <div className="entre-news-chapter">
          <h5>Latest news</h5>
          <div className="chapter">
            <div className="chapter-img">
              <div>
                <h6>
                  WHY VENTURE CAPITALS ARE HOTSPOTTING NIGERIA AND KENYAN
                  STARTUPS IN AFRICA
                </h6>
                <p>
                  By Winnie Kamau Nairobi, Kenya: The State of Tech in Africa
                  Report 2021 was launched in Capetown, South Africa. This
                  report got me curious
                </p>
              </div>
            </div>
          </div>

          <div className="chapter">
            <div className="chapter-img">
              <div>
                <h6>
                  WHY VENTURE CAPITALS ARE HOTSPOTTING NIGERIA AND KENYAN
                  STARTUPS IN AFRICA
                </h6>
                <p>
                  By Winnie Kamau Nairobi, Kenya: The State of Tech in Africa
                  Report 2021 was launched in Capetown, South Africa. This
                  report got me curious
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Entrepreneur;
