import React from "react";
import Topbar from "../Topbar";
import "./principale.css";
import FormMap from "../formMap";
import { motion } from "framer-motion";
import Footer from "./footer";
function Principale() {
  return (
    <div>
      <Topbar />
      <div className="bodyconte">
        <div className="content">
          <h1>
            Trouvez votre <br /> pharmacie de garde <br />
            ouverte
          </h1>
          <p>
            Egestas mauris nunc egestas ac. Malesuada vel non ultrices urna.
            Dolor est adipiscing ullamcorpe nulla sed justo crello.
          </p>
          <div className="formcenter">
            <FormMap />
          </div>
          {/* <div className="div_hr" />   */}
          <div className="iconsbtn">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
              <div id="btnapp">
                <img
                  src="https://medokaclient.vercel.app/assets/apple.webp"
                  alt=""
                />
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
              <div id="btnplay">
                <img
                  src="https://medokaclient.vercel.app/assets/google_play.webp"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="content2">
        <div className="paragra">
          <p>Ils ont trouvé une pharmacie avec Medoka</p>
        </div>
        <div className="groupargraph">
          {/* para1 */}
          <div className="para1">
            <p>★ ★ ★ ★ ★</p>
            <p>
              I received great customer service from the specialists who helped
              me. I would recommend to anyone who wants quality.
            </p>
            <div className="definition">
              <img
                src="https://medokaclient.vercel.app/assets/feedback_1.png"
                alt=""
              />
              <p>Viola Manisa</p>
            </div>
          </div>
          {/* para 2 */}
          <div className="para1">
            <p>★ ★ ★ ★ ★</p>
            <p>
              I received great customer service from the specialists who helped
              me. I would recommend to anyone who wants quality.
            </p>
            <div className="definition">
              <img
                src="https://medokaclient.vercel.app/assets/feedback_2.png"
                alt=""
              />
              <p>Nathalie Durand</p>
            </div>
          </div>
          {/* para 3 */}
          <div className="para1">
            <p>★ ★ ★ ★ ★</p>

            <p>
              I received great customer service from the specialists who helped
              me. I would recommend to anyone who wants quality.
            </p>
            <div className="definition">
              <img
                src="https://medokaclient.vercel.app/assets/feedback_3.png"
                alt=""
              />
              <p>Sean George</p>
            </div>
          </div>
          {/* para 4  */}
          <div className="para1">
            <p>★ ★ ★ ★ ★</p>

            <p>
              I received great customer service from the specialists who helped
              me. I would recommend to anyone who wants quality.
            </p>
            <div className="definition">
              <img
                src="https://medokaclient.vercel.app/assets/feedback_4.png"
                alt=""
              />
              <p>Evelyn Barnes</p>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="colright">
            <img
              src="https://medokaclient.vercel.app/assets/feedback_support.png"
              alt=""
            />
            <p>
              <span>Friendly</span> customer support team
            </p>
          </div>
          <div>
            <hr style={{ color: "gray", height: "100px" }} />
          </div>

          <div className="coleft">
            <img
              src="https://medokaclient.vercel.app/assets/feedback_trust.png"
              alt=""
            />
            <p>4.6 out of 5 stars from 8.6k reviews</p>
          </div>
        </div>
      </div>

      <div className="formpick">
        <div className="formleft">
          <h1>Vous êtes pharmacien d’officine ?</h1>
          <div className="formallchek">
            <div className="formcheck">
              <img
                src="https://medokaclient.vercel.app/assets/icons/check.svg"
                alt=""
              />
              <p>Complete and submit the Certified Instructor Application</p>
            </div>
            <div className="formcheck">
              <img
                src="https://medokaclient.vercel.app/assets/icons/check.svg"
                alt=""
              />
              <p>Complete the instructor-led course you intend to deliver</p>
            </div>
            <div className="formcheck">
              <img
                src="https://medokaclient.vercel.app/assets/icons/check.svg"
                alt=""
              />
              <p>Pass the certification exam at the mastery level</p>
            </div>
          </div>
          <div className="btngroup">
            <p>Découvrez Medoka pro</p>
          </div>
          {/* <div className="div_hr" /> */}
          <div className="paramlast">
            « I’m proud to wake up knowing my work is helping people around the
            world improve their careers and build great things. »
          </div>
        </div>
        <div className="pickright">
          <img
            src="https://medokaclient.vercel.app/assets/medokapro.jpeg"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Principale;
