import React, { useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";
import { Link } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  const { scrollDirection, scrollPosition } = useScrollDirection();
  // console.log(scrollDirection, scrollPosition);
  return (
    <div
      className={`navbar ${
        scrollDirection === "down" ? "navbarUp" : "navbarDown"
      } ${scrollPosition > 80 ? "navbarWhite" : ""} ${
        scrollPosition > 80 && scrollDirection === "up" ? "navbarShadow" : ""
      }`}
    >
      <div className="logo">
        {scrollPosition < 80 ? (
          <img
            src="	https://medokaclient.vercel.app/assets/logo.svg"
            alt="logo"
          />
        ) : (
          <img
            src="		https://medokaclient.vercel.app/assets/small_logo.svg"
            alt="logo"
          />
        )}
      </div>
      <div className="linkMedo">
        <div className="conx">
          <span>Connexion</span>
        </div>
        <div className="group">
          <p> Essayez gratuitement </p>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
