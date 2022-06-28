import React from "react";
import { NavLink } from "react-router-dom";

const Outils = () => {
  return (
    <div className="outils-container">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <h1 className="title-outils">Les Outils Du Changement</h1>
        <img
          src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2022/02/blandine-lozier-Hypnose-pertuis.png"
          alt="outils"
          className="image-outils"
        />
        <NavLink
          to="/outils"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <button className="button-outils">En savoir +</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Outils;
