import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Coaching from "./pages/Coaching";
import ContactTarifs from "./pages/ContactTarifs";
import Gestion from "./pages/Gestion";
import Home from "./pages/Home";
import Hypnose from "./pages/Hypnose";
import Outils from "./pages/Outils";
import Question from "./pages/Question";
import Services from "./pages/Services";
import Sevrage from "./pages/Sevrage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/outils" element={<Outils />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/contact" element={<ContactTarifs />} />
        <Route path="/hypnose" element={<Hypnose />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/sevrage" element={<Sevrage />} />
        {/* path="*" fonctionne si jamais l'url correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
