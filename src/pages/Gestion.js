import React from "react";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";

const Gestion = () => {
  return (
    <div>
      <Navigations />
      <h1 className="theme-title">GESTION DU POIDS</h1>
      <div className="container-gestion-chef">
        <div className="container-gestion-un">
          <div>
            <img
              src={`${require("../image/gestion/perte-de-poid-maigrir-cannes-nice-hypnose-blandine-lozier.jpg")}`}
              alt="mincir"
            />
          </div>
          <div>
            <p className="gras">
              Mincir grâce à l’association de la nutrition et de l’hypnothérapie
            </p>
            <p>
              <span>Qui n’a pas eu, un jour, à gérer des kilos en trop ?</span>{" "}
              Prendre du poids n’est pas une fatalité, mais une conséquence de
              différents facteurs. En effet, alimentation inadaptée,
              déséquilibre physiologique, psychologique (choc émotionnel,
              stress, angoisses, dépression, certaines pathologies comme le
              diabète, etc.), absence d’activité physique, tous ces facteurs
              pris séparément ou bien cumulés font que, jour après jour, on
              s’empâte et qu’on se retrouve face à un surpoids ou même une
              obésité.
            </p>
            <p>
              Oui ces kilos ont des répercussions négatives sur la santé
              physique et mentale de la personne et oui on peut les combattre
              efficacement et surtout durablement.
              <span>Comment y parvenir ?</span> Bien sûr en modifiant ses
              comportements alimentaires et en installant sur le long terme de
              bonnes habitudes, mais surtout en travaillant sur les raisons
              profondes qui engendrent la prise de poids grâce aux thérapies
              brèves. Je vous propose une reprise en main de votre vie en
              optimisant votre poids et votre santé. Praticienne spécialisée en
              perte de poids, je vous accompagne avec bienveillance vers votre
              objectif minceur et santé, grâce à des techniques, méthodes
              efficaces, pratiques et holistiques et surtout en ne parlant ni de
              régime, ni de repas tristes…
            </p>
          </div>
        </div>
        <div className="container-gestion-deux">
          <div>
            <p>
              Je vous guide pour mincir oui ! Mais en restant attentive à votre
              bien être psychologique, physique et physiologique pour vous
              permettre de mincir durablement avec une prise en charge globale,
              en tenant compte au maximum de vos rythmes et mode de vie.
            </p>
          </div>
          <div>
            <img
              src={`${require("../image/gestion/blandine-lozier-hypnose-nice-Hypnotherapeute-fumer.png")}`}
              alt="blandine"
            />
          </div>
        </div>
        <div className="container-gestion-trois">
          <p>
            Par une régulation durable de vos habitudes alimentaires, associée à
            la pratique de techniques ciblées, issues des TOP®, je vous aide à
            agir sur les facteurs en lien avec vos troubles du comportement
            alimentaire, de votre humeur, de votre sommeil.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gestion;
