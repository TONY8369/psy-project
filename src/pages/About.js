import React from "react";
import AboutUn from "../components/AboutUn";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navigations />
      <h1 className="theme-title">À PROPOS</h1>
      <AboutUn />
      <div className="about-container">
        <p className="about-un">
          Vous retrouverez une souplesse de l’esprit en vous réconciliant avec
          la réalité.
        </p>
        <p className="about-deux">
          Vous aurez la possibilité de lâcher vos peurs, vos phobies, les soucis
          contre lesquels vous ne pouvez rien. Vous évoluerez également dans
          bien d’autres domaines encore.
        </p>
      </div>
      <div className="about-container-deux">
        <p className="about-trois">
          En hypnothérapie, comme dans la plupart des thérapies brèves, la
          stratégie est de se libérer rapidement de ce qui nous bloque pour
          pouvoir regarder vers un avenir prometteur. C’est pour cela que par
          l’hypnothérapie on obtient de très bons résultats, notamment dans les
          domaines du sevrage tabagique ou encore dans la perte de poids
        </p>
        <img
          src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2019/11/blandine-lozier-hypnose-nice-coach-arreter-fumer-hypnotherapeute-2.png"
          alt="transformation"
          className="image-transformation"
        />
      </div>
      <div className="about-container">
        <p className="about-un">Que ce soit pour une ou quelques séances,</p>
        <p className="about-deux">
          au fil de nos rencontres, je vous accompagne dans votre cheminement
          personnel pour aller à la rencontre de vous même.
        </p>
      </div>
      <div className="about-container-trois">
        <h1>Diplômes et Certificats</h1>
        <div className="aContainerTrois">
          <ul className="container-ul">
            <li className="diplome-deux">
              Certificat de Maître-Praticienne en Hypnose Ericksonienne & PNL –
              Ecole Supérieure d’Hypnose Ericksonienne
            </li>
            <li className="diplome-deux">
              Certificat de praticienne en Techniques d’Optimisation du
              Potentiel (TOP)®
            </li>
            <li className="diplome-deux">
              Formation à la Systémique Paradoxale Palo Alto – CECODEV
            </li>
            <li className="diplome-deux">
              Membre du Syndicat National des Hypnothérapeutes (SNH) et du
              Conseil Européen du Coaching, du Mentorat et de la Supervision
              (EMCC) Membre de l’association AFCODEV
            </li>
            <li className="diplome-deux">
              Formations de spécialisation : Gestion du poids, arrêt du tabac et
              à différentes techniques issues des thérapies brèves
            </li>
            <li className="diplome-deux">
              Diplôme d’Etudes Supérieures Universitaires de Coaching Diplômée
              des Sciences de l’Education – Université Aix-Marseille
            </li>
            <li className="diplome-deux">
              Formation à la facilitation de groupe de Codéveloppement
              professionnel – CECODEV
            </li>
          </ul>
        </div>
        <div className="aContainerQuatre">
          <img
            src={`${require("../image/EMCC_FRANCE_vpdf-e1606378840347.png")}`}
            alt="emcc"
            className="emcc"
          />
          <img
            src={`${require("../image/logo-snh-def.jpg")}`}
            alt="snh"
            className="snh"
          />
          <img
            src={`${require("../image/logo_afcodev.jpg")}`}
            alt="afcodev"
            className="afcodev"
          />
        </div>
        <div className="about-container-cinq">
          <p className="paragraphe-container-cinq">
            Rappel : Il est important de rappeler que je ne suis ni médecin, ni
            psychologue, ni psychiatre, ni psychothérapeute. Je ne fais donc pas
            de diagnostic, ne soigne pas et ne guéris pas. Ces pages sont
            données dans le cadre d’une démarche de bien-être à l’exclusion de
            tout objectif médical (ou paramédical) et ne peuvent en aucun cas se
            substituer à un avis médical. Elles ne dispensent en aucun cas de
            consulter un professionnel de la santé, chaque fois que cela est
            nécessaire. Seul un médecin est habilité à poser des diagnostics,
            prescrire, modifier ou supprimer tout traitement médical. Toute
            question relevant du domaine médical est à poser à votre médecin
            traitant.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
