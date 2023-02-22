import { useState } from "react";
import { motion } from "framer-motion";
import Datepicker from "./Datepicker";
import { Link } from "react-router-dom";
import useScrollDirection from "../hooks/useScrollDirection";

import "./formMap.css";
function FormMap() {
  const [checkinput, setcheckinput] = useState(false);
  const [checkcalandar, setcheckcalandar] = useState(false);

  const [valueToDisplay, setValueToDisplay] = useState("Maintenant");
  const { scrollDirection, scrollPosition } = useScrollDirection();
  console.log(scrollDirection, scrollPosition);

  return (
    <div>
      <div
        className={`formInput ${
          scrollPosition < 60 ? "formInput" : "formapstyle"
        } `}
      >
        <div className="formMaps">
          <div
            className={`form1 ${
              scrollPosition < 60 ? "form1" : "form1radius"
            } `}
            onClick={() => setcheckinput(!checkinput)}
          >
            <label htmlFor="">Ou?</label>
            <input type="text" placeholder="(Ville, Secteur, Code postal...)" />
          </div>

          {checkinput === true ? (
            <motion.div
              initial={{ y: 200, scale: 1 }}
              animate={{ y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.03,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="listMap">
                <div className="forfor">
                  <img
                    src="https://medokaclient.vercel.app/assets/icons/currnet_position.svg"
                    alt=""
                  />
                  <h4 style={{ margin: "0" }}>utilise ma position</h4>
                </div>
                <div className="hr1" />
              </div>
            </motion.div>
          ) : null}
        </div>
        <div className="formcalandar">
          <div
            className="form2"
            onClick={() =>
              setcheckcalandar(!checkcalandar)(
                window.scrollTo({ top: 400, behavior: "smooth" })
              )
            }
          >
            <p>{valueToDisplay}</p>
          </div>
          {checkcalandar === true ? (
            <Datepicker setValueToDisplay={setValueToDisplay} />
          ) : null}
        </div>

        <div className="search1">
          <Link className="navlink" to="/PharmacieListe">
            <button>
              <img
                src="https://medokaclient.vercel.app/assets/icons/search.svg"
                alt=""
              />
              Trouver
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default FormMap;
