import React, { useState } from "react";
import { motion } from "framer-motion";

function Fomefillter() {
  const [check1, setCheck1] = useState(false);
  const [checking1, setChecking1] = useState(false);
  return (
    <div>
      <motion.div
        className="formfillter"
        initial={{ y: 200, scale: 1 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.03,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="titleFillter">
          <img
            src="https://medokaclient.vercel.app/assets/icons/times.svg"
            alt=""
          />
          <p>Fillter</p>
          <div></div>
        </div>
        <div className="contentscrool">
          <div className="allcontent">
            <h1>Services proposés</h1>
            <div className="content1">
              <div className="colleft4">
                <input
                  type="checkbox"
                  id="check1"
                  checked={check1}
                  onChange={() => setCheck1(!check1)}
                />
                <p>Dépistage COVID-19 antigénique</p>
              </div>
              <div className="coleright4">
                <input type="checkbox" />
                <p>Bilan de médication</p>
              </div>
            </div>
            <div className="content1">
              <div className="colleft4">
                <input
                  type="checkbox"
                  id="check1"
                  checked={check1}
                  onChange={() => setCheck1(!check1)}
                />
                <p>Dépistage COVID-19 Ponction capillaire</p>
              </div>
              <div className="coleright4">
                <input type="checkbox" />
                <p>Entretien pharmaceutique AOD</p>
              </div>
            </div>
            <div className="content1">
              <div className="colleft4">
                <input
                  type="checkbox"
                  id="check1"
                  checked={check1}
                  onChange={() => setCheck1(!check1)}
                />
                <p>Vaccination antigrippale</p>
              </div>
              <div className="coleright4">
                <input type="checkbox" />
                <p>Semelles orthopédiques</p>
              </div>
            </div>
            <div className="content1">
              <div className="colleft4">
                <input
                  type="checkbox"
                  id="check1"
                  checked={check1}
                  onChange={() => setCheck1(!check1)}
                />
                <p>Dépistage COVID-19 antigénique</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="allcontent">
            <h1>Equipements</h1>
            <div className="content1">
              <div className="colleft4">
                <input
                  type="checkbox"
                  id="check1"
                  checked={check1}
                  onChange={() => setCheck1(!check1)}
                />
                <p>Rampe d’accès PMR</p>
              </div>
              <div className="coleright4">
                <input type="checkbox" />
                <p>Borne mise à jour carte vitale</p>
              </div>
            </div>
            <div className="content1">
              <div className="colleft4">
                <input
                  type="checkbox"
                  id="check1"
                  checked={check1}
                  onChange={() => setCheck1(!check1)}
                />
                <p>Balance numérique poids</p>
              </div>
              <div className="coleright4">
                <input type="checkbox" />
                <p>Borne de mesure taille </p>
              </div>
            </div>
            <div className="content1">
              <div className="colleft4">
                <input
                  type="checkbox"
                  id="check1"
                  checked={check1}
                  onChange={() => setCheck1(!check1)}
                />
                <p>Rampe d’accès PMR</p>
              </div>
              <div className="coleright4">
                <input type="checkbox" />
                <p>Borne mise à jour carte vitale</p>
              </div>
            </div>
            <div className="content1">
              <div className="colleft4">
                <input
                  type="checkbox"
                  id="check1"
                  checked={check1}
                  onChange={() => setCheck1(!check1)}
                />
                <p>Borne mesure tension arterielle</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="allcontent">
            <h1>Langue parlée en pharmacie</h1>
            <div className="content1">
              <div className="colleft4">
                <input
                  type="checkbox"
                  id="check1"
                  checked={check1}
                  onChange={() => setCheck1(!check1)}
                />
                <p>Anglais</p>
              </div>
              <div className="coleright4">
                <input type="checkbox" />
                <p>Italien</p>
              </div>
            </div>
            <div className="content1">
              <div className="colleft4">
                <input
                  type="checkbox"
                  id="check1"
                  checked={check1}
                  onChange={() => setCheck1(!check1)}
                />
                <p>Espagnole</p>
              </div>
              <div className="coleright4">
                <input type="checkbox" />
                <p>Arabe </p>
              </div>
            </div>

            <hr />
          </div>
          <div className="allcontent">
            <div className="content1">
              <div className="colleft4">
                <img
                  src="https://medokaclient.vercel.app/assets/filters.png"
                  alt=""
                />
                <div className="colend">
                  <h1>Top Pharmacie</h1>
                  <p>Afficher les pharmacie reconnues par les utilisateurs</p>
                </div>
              </div>
              <div className="colerightchcked">
                <input
                  id="checking1"
                  type="checkbox"
                  value={checking1}
                  onChange={() => setChecking1(!checking1)}
                />
                <label htmlFor="check1"></label>
              </div>
            </div>
          </div>
        </div>
        <div className="footercontent">
          <div className="contcheck">
            <p>Tout effacer</p>
            <button>Afficher 0 pharmacie</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Fomefillter;
