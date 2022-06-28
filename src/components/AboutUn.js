import React from "react";

const AboutUn = () => {
  return (
    <div className="aboutUn-container">
      <div data-aos="flip-right" id="aboutUn-container-deux">
        <h1 className="aboutUn-title-un">BLANDINE LOZIER</h1>
        <h2 className="aboutUn-title-deux">
          Hypnothérapeute, coach et préparatrice mentale
        </h2>
        <p className="aboutUn-text">
          Ce qui surprend, souvent agréablement, les personnes que j’accompagne,
          c’est la relation « authentique » qui se construit entre nous. Je mets
          l’accent sur la bienveillance, le non-jugement, le respect de votre
          liberté dans votre cheminement personnel. L’accompagnement et l’action
          thérapeutique ne peuvent être efficaces que dans une relation de
          confiance co-construite entre vous et moi, c’est le fondement de mon
          travail.
        </p>
        <p className="aboutUn-text-deux">
          Ainsi vous explorerez et vous réapproprierez vos ressources oubliées,
          vous vous libérerez de vos scénarios de vie négatifs, répétitifs. Vous
          vous détacherez de vos mauvaises expériences ou traumatismes passés,
          vous apprendrez à mieux gérer vos émotions, votre stress et vos
          douleurs.
        </p>
      </div>
      <div data-aos="flip-left" id="photo-blandine">
        <img
          src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2019/11/blandine-lozier-hypnotherapeute-cannes-nice-hypnose-coaching-stress-1.jpg"
          alt="Blandine"
          className="image-blandine"
        />
      </div>
    </div>
  );
};

export default AboutUn;
