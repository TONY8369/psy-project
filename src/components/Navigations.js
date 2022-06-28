import React from "react";
import { NavLink } from "react-router-dom";

const Navigations = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <img
            src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2019/12/Blandine-Lozier-hypnose-cannes-nice.png"
            //src={`${require("../image/image001.png")}`}
            alt="logo"
            className="logo-image"
          />
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="item">A propos</li>
        </NavLink>
        <NavLink
          to="/services"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="item" id="nav-project">
            Services
            <ul className="nav-projects">
              <NavLink
                to="/hypnose"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li className="item">Hypnose & Thérapies</li>
              </NavLink>
              <NavLink
                to="/coaching"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li className="item">Coaching & TOP</li>
              </NavLink>
              <NavLink
                to="/gestion"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li className="item" id="trois">
                  Gestion du poids
                </li>
              </NavLink>
              <NavLink
                to="/sevrage"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li className="item" id="quatre">
                  Sevrage Tabagique
                </li>
              </NavLink>
            </ul>
          </li>
        </NavLink>
        <NavLink
          to="/outils"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="item">Outils</li>
        </NavLink>
        <NavLink
          to="/questions"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="item">Questions</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="item">Contact & Tarifs</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigations;
