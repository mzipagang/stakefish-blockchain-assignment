import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

//social media icons
import {
  FaFacebookF,
  FaReddit,
  FaTwitterSquare,
  FaArrowLeft,
} from "react-icons/fa";

const Card = ({ title, data }) => {
  return (
    <div>
      <Link to="/">
        <div className="returnToMainPage">
          <FaArrowLeft /> <span className="goBack">BACK TO MAIN PAGE</span>
        </div>
      </Link>{" "}
      <br/>
      <h1>{title}</h1>
      <br/>
      <div className="mainPage">
        <div className="card">
          <img src={data.image} alt="" className="profile-img" />

          <div className="profile-position">
            <h2 className="profile-name">{data.name}</h2>
            <div>Trust Rank</div>
            <div className="trust-score">
              {data.trust_score_rank ? data.trust_score_rank : "-"}
            </div>
          </div>
          <div className="profile-info">
            <div>
              <div>Year Established</div>
              <div>
                <b>{data.year_established ? data.year_established : "-"}</b>
              </div>
            </div>
            <br />
            <div>
              <div>Country</div>
              <div>
                <b>{data.country ? data.country : "-"}</b>
              </div>
            </div>
            <br />
            <div className="description">
              <div>{data.description}</div>
              <br />
              <div>Social Media:</div>
            </div>
            <div>
              <ul className="social-list">
                {data.facebook_url && (
                  <li>
                    <a href={data.facebook_url} className="social-link">
                      <FaFacebookF />
                    </a>
                  </li>
                )}
                {data.reddit_url && (
                  <li>
                    <a href={data.facebook_url} className="social-link">
                      <FaReddit />
                    </a>
                  </li>
                )}

                {data.twitter_handle && (
                  <li>
                    <a
                      href={`http://www.twitter.com/${data.twitter_handle}`}
                      className="social-link"
                    >
                      <FaTwitterSquare />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
