import React from "react";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";

const Outils = () => {
  return (
    <div>
      <Navigations />
      <h1 className="theme-title">Les Outils du Changement</h1>
      <div>
        <div className="container-outil-un">
          <div className="outil-un">
            <img
              src={`${require("../image/blandine-lozier-hypnose-hypnotherapeute-cannes-nice-Ericksonnienne-1.png")}`}
              alt="outil-un"
            />
          </div>
          <div className="outil-deux">
            <p>
              <span>Le coaching de vie</span> est une méthode d’accompagnement
              personnalisé, fondée sur un dialogue entre le client et son coach.
              Il permet au client, par la construction de ces échanges, de
              trouver les solutions les plus adaptées à ses capacités, croyances
              et représentations, à sa situation et ses enjeux.
            </p>
            <p>
              <span>Le coaching professionnel</span> est davantage destiné à
              accompagner et à améliorer les compétences, la performance d’un
              individu dans l’évolution de sa vie professionnelle, par des
              techniques de développement personnel, lui permettant de
              développer ses ressources et talents en vue d’atteindre un
              objectif défini au préalable et de relever les défis auxquels il
              est confronté.
            </p>
          </div>
        </div>
        <div className="container-outil-deux">
          <div className="outil-quatre">
            <p>
              <span>Les Techniques d’Optimisation du Potentiel (TOP)</span> –
              Créées par le docteur Edith Perreaut-Pierre au début des années
              1990 pour la préparation mentale des sportifs de haut niveau et
              pour aider les militaires à se préparer, faire face et récupérer,
              les Techniques d’Optimisation du Potentiel (TOP)® sont aujourd’hui
              largement adoptées dans de nombreux secteurs d’activités et
              organisations : éducation, santé, sécurité, urgences, énergie,
              services…
            </p>
            <p>
              <span>Les (TOP) </span> sont un ensemble de stratégies mentales
              (cognitives et comportementales) permettant à chacun de mobiliser
              au mieux ses ressources (physiologiques, émotionnelles, cognitives
              et comportementales) en fonction des exigences des situations
              qu’il rencontre afin d’atteindre ses objectifs. La méthode (TOP)®
              propose un ensemble de techniques simples, pragmatiques, brèves
              (10 minutes maximum) et utilisables par tous, partout et en toutes
              circonstances. Dans tous les cas, les (TOP)® répondent à la
              nécessité d’être la meilleure version de soi-même dans le but
              d’améliorer sa propre vie ou cette d’autrui et d’atteindre ses
              objectifs.
            </p>
            <p>
              <span>Utilisation et bénéfices :</span>{" "}
              <span className="span">1</span> Réguler son niveau d’énergie au
              cours de la journée en fonction de ses besoins, de ses objectifs
              et des contraintes rencontrées, tout en préservant sa santé de
              façon durable. <span className="span">2</span> Se motiver ou se
              remotiver, par de nombreuses techniques basées sur l’Imagerie
              Mentale. <span className="span">3 </span>Favoriser le changement
              et accélérer l’adaptation à toute situation nouvelle, complexe ou
              stressante. <span className="span">4</span> Optimiser sa
              récupération physique et mentale : gérer ses rythmes
              activité-repos, en prenant en compte ses rythmes
              chrono-biologiques, donc prévenir et gérer la fatigue.{" "}
              <span className="span">5</span> Améliorer la cohésion des équipes
              en favorisant les relations interpersonnelles.{" "}
              <span className="span">6</span> Faciliter la prise de décision en
              situation stressante ou dégradée. <span className="span">7</span>{" "}
              Faire face plus sereinement aux situations de crise..
            </p>
          </div>
          <div className="outil-trois">
            <img
              src={`${require("../image/blandine-lozier-techniques-optimisation-potentiel-2.png")}`}
              alt="outil-trois"
            />
          </div>
        </div>
        <div className="container-outil-trois">
          <div className="outil-cinq">
            <img
              src={`${require("../image/blandine-lozier-hypnose-hypnotherapeute-cannes-nice-Programmation-neurolinguistique-3.png")}`}
              alt="outil-cinq"
            />
          </div>
          <div className="outil-six">
            <p>
              <span>La Programmation neuro-linguistique (PNL)</span> est un
              ensemble de techniques de communication qui a pour but de
              développer les capacités mentales de l’individu. Sa finalité est
              de le rendre capable de faire face au stress, d’apprendre à mieux
              gérer une situation… La PNL est principalement recommandée pour
              les personnes ayant des difficultés relationnelles, que ce soit au
              travail ou dans la vie privée.
            </p>
          </div>
        </div>
        <div className="container-outil-quatre">
          <div className="outil-huit">
            <p>
              <span>
                NMO – Neurothérapie par mouvements oculaires, inspiré de l’EMDR
              </span>{" "}
              – Cette technique, issue de l’EMDR, est une approche thérapeutique
              qui repose sur le postulat suivant : des blessures psychologiques
              importantes laissent une trace dans le cerveau. La stimulation
              sensorielle bilatérale permet d’ancrer de nouveaux schémas de
              perception d’un évènement ou d’une série d’évènements, sources de
              souffrance, en débloquant les émotions négatives stockées dans le
              système nerveux et elle aide le cerveau à retraiter l’expérience
              pour qu’elle soit ensuite assimilée.
            </p>
          </div>
          <div className="outil-sept">
            <img
              src={`${require("../image/blandine-lozier-hypnose-hypnotherapeute-cannes-nice-Therapie-par-mouvements-oculaires-4.png")}`}
              alt="outil-sept"
            />
          </div>
        </div>
        <div className="container-outil-cinq">
          <div className="outil-neuf">
            <img
              src={`${require("../image/blandine-lozier-hypnose-hypnotherapeute-cannes-nice-coherence-cardiaque-5.png")}`}
              alt="outil-neuf"
            />
          </div>
          <div className="outil-dix">
            <p>
              <span>La cohérence cardiaque</span> est un outil de la gestion du
              stress et des émotions qui apporte de nombreux bienfaits sur la
              santé physique, mentale et émotionnelle. Cette technique permet
              d’apprendre à contrôler sa respiration afin de réguler son stress
              et son anxiété. Technique simple qui engendre une amélioration
              dans la dépression et la tension artérielle.
            </p>
          </div>
        </div>
        <div className="container-outil-six">
          <div className="outil-douze">
            <p>
              <span>La méditation de pleine conscience,</span> est une pratique
              personnelle comme la cohérence cardiaque. Son but est la réduction
              du stress (MBSR- Mindfulness-Based Stress Reduction) ou la
              prévention de rechutes dépressives (MBCTD-Mindfulness-Based
              Cognitive Therapy for Depression). Elle entraîne l’esprit à se
              libérer du flot de pensées pour se concentrer sur le moment
              présent. Les bienfaits sont tels que cette pratique est de plus en
              plus utilisée pour certaines pathologies notamment liées au
              stress, avec une influence positive sur le calme mental, le
              contrôle des émotions dans la vie quotidienne.
            </p>
          </div>
          <div className="outil-onze">
            <img
              src={`${require("../image/blandine-lozier-hypnose-hypnotherapeute-cannes-nice-meditation-de-pleine-conscience-6.png")}`}
              alt="outil-onze"
            />
          </div>
        </div>
        <div className="container-outil-sept">
          <div className="outil-treize">
            <img
              src={`${require("../image/blandine-lozier-hypnose-hypnotherapeute-cannes-nice-Co-Developpement-professionnel-et-managerial-7.png")}`}
              alt="outil-treize"
            />
          </div>
          <div className="outil-quatorze">
            <p>
              <span>Le Codéveloppement professionnel</span> est une approche
              d’apprentissage dans l’action. L’essentiel de la démarche consiste
              à réfléchir avec d’autres personnes, prendre du recul pour
              résoudre des problèmes, partager des préoccupations ou clarifier
              des projets. Outil d’intelligence collective, le Codéveloppement
              est un processus structuré d’animation d‘un groupe dans la durée,
              qui aborde généralement les problématiques du quotidien
              professionnel. Chacun des participants s’engage à partager ses
              idées avec le groupe, à collaborer et aider ses pairs dans
              l’exploration de la situation afin de découvrir de nouvelles
              perspectives et solutions innovantes. La démarche est généralement
              utilisée dans le cadre professionnel, mais s’avère efficace aussi
              dans des situations de la vie quotidienne.
            </p>
          </div>
        </div>
        <div className="container-outil-huit">
          <p>
            Les thérapies brèves et le coaching constituent des outils de
            changement permettant des transformations profondes et rapides
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Outils;
