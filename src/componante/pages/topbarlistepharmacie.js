import React from "react";
import "./Topbarlistepharmacie.css";
import { Link } from "react-router-dom";
function Topbarlistepharmacie() {
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img src="https://medokaclient.vercel.app/assets/logo.png" alt="" />
          </Link>
        </div>

        <div className="butnLeft">
          <div className="btncontent">
            <p>Essayer gratuitement</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbarlistepharmacie;
