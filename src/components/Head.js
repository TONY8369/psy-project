import React from "react";

const Head = () => {
  return (
    <div className="head-container">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        id="head-containers"
      >
        <img
          src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2019/12/Blandine-Lozier-hypnose-cannes-nice.png"
          alt="logo"
          className="head-image"
        />
        <h2 className="litle-title-head">
          Cabinet d’hypnose à Pertuis – La Tour-d’Aigues
        </h2>
        <p className="paragraphe-head">
          Je vous accueille dans mon cabinet d’hypnose à La Tour d’Aigues à côté
          de Pertuis. Que ce soit pour une ou quelques séances, au fil de nos
          entrevues, je vous accompagne dans votre cheminement personnel pour
          aller à la rencontre de l’essence même de ce que vous êtes et vous
          permettre d’atteindre les objectifs que vous vous êtes fixés…
        </p>
        <img
          src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2022/02/seance-hypnose-pertuis-tour-aigues.png"
          alt="compétences"
          className="head-image"
        />
      </div>
    </div>
  );
};

export default Head;
