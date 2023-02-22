import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Datepicker.css";
import { motion } from "framer-motion";
import moment from "moment";

function Datepicker({ setValueToDisplay }) {
  moment.locale("fr", {
    monthsShort:
      "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
        "_"
      ),
    monthsParseExact: true,
    weekdaysMin: "Dim._Lun._Mar._Mer._Jeu._Ven._Sam.".split("_"),
    weekdaysParseExact: true,
  });

  const onchange = (date) => {
    setValueToDisplay(moment(date).format("dd DD MMM YYYY"));
  };

  return (
    <motion.div
      className="datepicker"
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0, 1.9, 0.3, 1.01],
      }}
    >
      <div

      // onClick={() => {
      //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      // }}
      >
        <div className="btnDays">
          <button>Maintenant</button>
          <button>aujourd'hui</button>
          <button>Dimanche</button>
        </div>
        <div className="datee">
          <button>
            <span></span>
          </button>
        </div>
        <Calendar onChange={onchange} />
      </div>
    </motion.div>
  );
}

export default Datepicker;
