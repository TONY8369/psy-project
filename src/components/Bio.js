import React from "react";
import { NavLink } from "react-router-dom";

const Bio = () => {
  return (
    <div className="bio-container">
      <div data-aos="fade-right" id="image-bio">
        <img
          src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2019/11/blandine-lozier-hypnose-nice-caen-Hypnotherapeute-arreter-fumer.jpg"
          alt="Blandine"
          className="bio-image"
        />
      </div>
      <div data-aos="fade-left" id="text-bio">
        <h2 className="bio-title-un">HYPNOTHéRAPEUTE & COACH MENTAL</h2>
        <h1 className="bio-title-deux">Blandine Lozier</h1>
        <p className="paragraphe-bio">
          Ce qui surprend, souvent agréablement, les personnes que j’accompagne,
          c’est la relation « authentique » qui se construit entre nous. Je mets
          l’accent sur la bienveillance, le non-jugement, le respect de votre
          liberté dans votre cheminement personnel […]{" "}
        </p>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <button className="button">Lire +</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Bio;
