import React from "react";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";

const Hypnose = () => {
  return (
    <div>
      <Navigations />
      <h1 className="theme-title">HYPNOSE & THÉRAPIES BRÈVES</h1>
      <div className="container-hypnose-chef">
        <div className="container-hypnose-un">
          <div>
            <img
              src={`${require("../image/hypnose/blandine-lozier-hypnose-nice-Hypnotherapeute-stress-phobie-anxiété.jpg")}`}
              alt="anxiété"
            />
          </div>
          <div>
            <p className="gras">
              De nombreuses problématiques peuvent être traitées par l’approche
              des thérapies brèves qui regroupent des pratiques telles que
              l’hypnothérapie, la NMO ou encore la PNL…et ce à toutes les étapes
              de la vie.
            </p>
            <p>
              En 3 à 10 séances, ces outils orientés solutions, permettent de
              faire émerger des ouvertures concrètes en réponse à des situations
              quotidiennes ou de vie difficiles. Ainsi au cours de ces séances
              vous pourrez vous libérer ou diminuer l’impact de situations,
              d’évènements vécus, ceci vous permettant de » digérer » le passé
              pour pouvoir avancer.
            </p>
          </div>
        </div>
        <div className="container-hypnose-deux">
          <p className="gras">
            Les thérapies brèves permettent d’intervenir dans un grand nombre de
            problématiques et aident à mieux les affronter. Ainsi :
          </p>
          <p>
            • Difficultés personnelles (manque de confiance en soi, d’estime de
            soi, héritages familiaux, déprime…)
          </p>
          <p>• Phobies, angoisses, blocages et peurs diverses, anxiété</p>
          <p>
            • Stress (burn-out, surmenage, difficultés relationnelles ou
            professionnelles, etc…)
          </p>
          <p>
            • Déceptions, blessures d’abandon, de rejet, de honte ou
            d’humiliation
          </p>
          <p>• Perte d’un être aimé</p>
          <p>• Gestion des douleurs chroniques</p>
          <p>
            • Changements brutaux, transition de vie et/ou professionnelle
            (retraite, perte d’emploi, reconversion professionnelle, etc …)
            entrent dans le champ de ces thérapies.
          </p>
          <p>
            PS: la liste n’est pas exhaustive et chacun peut trouver une aide et
            une réponse dans ces pratiques
          </p>
        </div>
        <div className="container-hypnose-trois">
          <div>
            <p className="gras">
              Particulièrement touchés par ces questions, les adultes, les
              seniors traversent des périodes de transition de vie personnelle
              et/ou professionnelle.
            </p>
            <p>
              Confrontées à des changements, à différents évènements, parfois
              fragilisées, stressées, ces personnes peinent à retrouver du sens
              et à envisager de nouveaux projets répondant à l’évolution de leur
              situation. Dans ces moments délicats, je les accompagne pour leur
              permettre de se reconnecter à leurs ressources et les aider à
              découvrir des perspectives correspondant à leurs valeurs, leurs
              besoins et leurs envies.
            </p>
          </div>
          <div>
            <img
              src={`${require("../image/hypnose/hypnotherapeute-blandine-lozier-Hypnose-pertuis-tour-aigues.jpg")}`}
              alt="aigues"
            />
          </div>
        </div>
        <div className="container-hypnose-quatre">
          <div>
            <img
              src={`${require("../image/hypnose/blandine-lozier-hypnose-adolescents-nice-Hypnotherapeute-stress-phobie-anxiété.jpg")}`}
              alt="stress"
            />
          </div>
          <div>
            <p className="gras">
              Enfin, elles sont souvent utilisées dans certaines problématiques
              plus spécifiques rencontrées chez l’enfant et l’adolescent.
              Certains troubles comme :{" "}
            </p>
            <p>
              • Les difficultés scolaires, les troubles de l’apprentissage ou la
              difficulté à se concentrer
            </p>
            <p>
              • Les troubles du comportement (hyperactivité, retrait,
              agressivité, …)
            </p>
            <p>
              • Les difficultés relationnelles, le manque de confiance et
              d’affirmation de soi
            </p>
            <p>• Le bégaiement</p>
            <p>• Les troubles du sommeil</p>
            <p>
              • La somatisation qui engendre des douleurs chroniques (maux de
              ventre, de tête…) sans réponse médicale, ou encore l’énurésie (lit
              ou vêtements mouillés) pourront être traités par ces différentes
              méthodes.
            </p>
            <p>• Le stress, la démotivation</p>
            <p>
              PS: Ces thérapies interviennent aussi dans la gestion des
              addictions chez l’adolescent (stupéfiants, jeux vidéo, troubles
              alimentaires,…)
            </p>
          </div>
        </div>
        <div className="container-hypnose-cinq">
          <p>
            Découvrir de nouvelles ressources, choisir des solutions pour
            résoudre la difficulté et effectuer une transformation intérieure
            positive.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hypnose;
