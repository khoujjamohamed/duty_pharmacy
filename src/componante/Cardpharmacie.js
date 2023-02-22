import React from "react";
import "./Cardpharmacie.css";
import { GrStar } from "react-icons/gr";
import { RiRunFill } from "react-icons/ri";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

function Cardpharmacie({ pharmacy }) {
  return (
    <div>
      <div className="card-container">
        <div className="image-wrapper">
          <img src={pharmacy.pharmacieImg} alt="" />
          <div className="rating">
            <GrStar
              className="iconstar"
              style={{ color: "#1dd36c", fontSize: "20px" }}
            />
            <span>{pharmacy.pharmacieRating}</span>
          </div>
          <div className="like">
            <FaRegHeart
              className="iconeheart "
              style={{
                fontSize: "25px",
                color: "#fff",
              }}
            />
          </div>
        </div>

        <div className="info-wrapper">
          <div className="info-left">
            <p className="info-title">{pharmacy.pharmacieName}</p>
            <p className="info-distance">{pharmacy.pharmacieDistance}km</p>
            <span className="info-time">
              <RiRunFill
                style={{
                  color: "#1dd36c",
                  fontSize: "20px",
                }}
              />
              3min
            </span>
          </div>
          <div className="info-right">
            <p>ferme à </p>
            <p className="close-at">
              <MdOutlineAccessTimeFilled
                style={{
                  color: "#1dd36c",
                  fontSize: "20px",
                }}
              />
              <p>20:00</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardpharmacie;
