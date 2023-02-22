import React, { useState } from "react";
import "./PharmacieListe.css";
import FormMap from "../formMap";
import Footer from "./footer";
import Topbarlistepharmacie from "./topbarlistepharmacie";
import AucunePharmacie from "../AucunePharmacie";
import Fomefillter from "./fomefillter";
import Cardpharmacie from "../Cardpharmacie";

var pharmaciesData = require("../../fake-data/pharmacies.json");

function PharmacieListe() {
  const [checkinput, setcheckinput] = useState(false);

  return (
    <div>
      <div className="topbar">
        <Topbarlistepharmacie />
      </div>
      <div className="formsearchmap">
        <FormMap />
      </div>
      <hr />
      <div className="contentmap">
        <div className="formsMap">
          <div className="formapright">
            <h1>Plus de {pharmaciesData.length} Pharmacies ouverte</h1>
            <p>Classement des résultats</p>
          </div>
          <div className="formapleft">
            <button className="card">
              <div>
                <img
                  src="https://medokaclient.vercel.app/assets/icons/cart.svg"
                  alt=""
                />
              </div>
              <div>
                <p>Afficher la carte</p>
              </div>
            </button>

            <button
              className="filter"
              onClick={() => setcheckinput(!checkinput)}
            >
              <img
                src="https://medokaclient.vercel.app/assets/icons/filter.svg"
                alt=""
              />
              <p>Filter</p>
            </button>
          </div>
        </div>
        {checkinput === true ? <Fomefillter /> : null}
        {pharmaciesData.length === 0 ? (
          <div className="notpharmacie">
            <AucunePharmacie />
          </div>
        ) : (
          <div className="cards">
            {pharmaciesData.map((pharmacy, index) => (
              <Cardpharmacie pharmacy={pharmacy} />
            ))}
          </div>
        )}

        <div className="btnApplay">
          <img src="	https://medokaclient.vercel.app/assets/apple.webp" alt="" />
          <img
            src="https://medokaclient.vercel.app/assets/google_play.webp"
            alt=""
          />
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default PharmacieListe;
