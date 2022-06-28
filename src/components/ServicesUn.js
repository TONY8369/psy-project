import React from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-container">
      <div className="title-services">
        <h1>Services proposés</h1>
      </div>
      <div data-aos="fade-up-right" id="container-services-un">
        <div className="container-un">
          <img
            src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2022/02/Hypnose-pertuis-tour-aigues.png"
            alt="cerveau"
            className="cerveau"
          />
          <h2 className="title-services-un">HYPNOSE & THéRAPIES BRèVES</h2>
          <p className="text-services">
            Stress, angoisses, troubles du sommeil ou encore gestion de la
            douleur, l’hypnothérapie et les thérapies brèves peuvent soulager
            dans bien des cas.
          </p>
          <NavLink
            to="/hypnose"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <button className="button-services">Savoir +</button>
          </NavLink>
        </div>
        <div className="container-deux">
          <img
            src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2022/02/hypnose-blandine-lozier-stress-hypnotherapeute-anxie%CC%81te%CC%81-phobies.png"
            alt="cible"
            className="cible"
          />
          <h2 className="title-services-un">
            COACHING & TECHNIQUES D’OPTIMISATION DU POTENTIEL{" "}
          </h2>
          <p className="text-services">
            Transition de vie personnelle ou professionnelle, le coaching et
            l’optimisation de votre potentiel vous guideront sur les chemins de
            l’amélioration et de l’évolution.
          </p>
          <NavLink
            to="/coaching"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <button className="button-services">Savoir +</button>
          </NavLink>
        </div>
      </div>
      <div data-aos="fade-up-left" id="container-services-deux">
        <div className="container-trois">
          <img
            src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2019/11/blandine-lozier-hpnose-nice-nutrition-3.png"
            alt="metre"
            className="metre"
          />
          <h2 className="title-services-deux">GESTION DU POIDS</h2>
          <p className="text-services">
            Mincir grâce à l’association de l’hypnose thérapeutique et de la
            nutrition, c’est possible…
          </p>
          <NavLink
            to="/gestion"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <button className="button-services-trois">Savoir +</button>
          </NavLink>
        </div>
        <div className="container-quatre">
          <img
            src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2019/11/blandine-lozier-hpnose-nice-sevrage-tabagique.png"
            alt="tabac"
            className="tabac"
          />
          <h2 className="title-services-deux">SEVRAGE TABAGIQUE</h2>
          <p className="text-services">
            Arrêter de fumer totalement, définitivement et en douceur en une
            séance, avec la méthode ATN®.
          </p>
          <NavLink
            to="/sevrage"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <button className="button-services-quatre">Savoir +</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;
