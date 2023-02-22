import React from "react";
import Topbar from "./componante/Topbar";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principale from "./componante/pages/principale";
import PharmacieListe from "./componante/pages/pharmacieListe";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Principale />} />
          <Route exact path="/PharmacieListe" element={<PharmacieListe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
