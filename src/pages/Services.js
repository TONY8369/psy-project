import React from "react";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <Navigations />
      <h1 className="theme-title">Services Proposés</h1>
      <div className="container-services-one">
        <div className="services-one">
          <div className="services-one-un">
            <img src={`${require("../image/cerveau.png")}`} alt="cerveau" />
            <p className="hypnose-title">HYPNOSE & THéRAPIES BRèVES</p>
            <p>
              Stress, angoisses, troubles du sommeil ou encore gestion de la
              douleur, l’hypnothérapie et les thérapies brèves peuvent soulager
              dans bien des cas.
            </p>
            <NavLink
              to="/hypnose"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <button>En Savoir +</button>
            </NavLink>
          </div>
        </div>
        <div className="services-two">
          <div className="services-two-un">
            <img src={`${require("../image/cible.png")}`} alt="cible" />
            <p className="coaching-title">
              COACHING & TECHNIQUES D’OPTIMISATION DU POTENTIEL{" "}
            </p>
            <p>
              Transition de vie personnelle ou professionnelle, le coaching et
              l’optimisation de votre potentiel vous guideront sur les chemins
              de l’amélioration et de l’évolution.
            </p>
            <NavLink
              to="/coaching"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <button>En Savoir +</button>
            </NavLink>
          </div>
        </div>
        <div className="services-three">
          <div className="services-three-un">
            <img src={`${require("../image/metre.png")}`} alt="metre" />
            <p className="gestion-title">GESTION DU POIDS</p>
            <p className="paragraphes-services-three">
              Mincir grâce à l’association de l’hypnose thérapeutique et de la
              nutrition, c’est possible…
            </p>
            <NavLink
              to="/gestion"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <button>En Savoir +</button>
            </NavLink>
          </div>
        </div>
        <div className="services-for">
          <div className="services-for-un">
            <img src={`${require("../image/tabac.png")}`} alt="tabac" />
            <p className="sevrage-title">SEVRAGE TABAGIQUE </p>
            <p className="paragraphes-services-for">
              Arrêter de fumer totalement, définitivement et en douceur en une
              séance, avec la méthode ATN®.
            </p>
            <NavLink
              to="/sevrage"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <button>En Savoir +</button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
