import React from "react";
import Formulaire from "../components/Formulaire";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";

const ContactTarifs = () => {
  return (
    <div>
      <Navigations />
      <h1 className="theme-title-contact">Contact & Tarifs</h1>
      <div className="container-form-contact">
        <div data-aos="fade-right" className="contact-container">
          <img
            src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2019/11/blandine-lozier-hypnose-nice-coach-arreter-fumer-hypnotherapeute-icon-2.png"
            alt="email"
            className="email-contact"
          />
          <p className="text-email">contact@hypnocoaching-lozier.fr</p>
          <img
            src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2019/11/blandine-lozier-hypnose-nice-coach-arreter-fumer-hypnotherapeute-icon-3.png"
            alt="phone"
            className="phone-contact"
          />
          <p className="text-phone">+33 661 190 768</p>
          <img
            src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2019/11/blandine-lozier-hypnose-nice-coach-arreter-fumer-hypnotherapeute-icon-1.png"
            alt="adresse"
            className="adresse-contact"
          />
          <p className="text-adresse">
            Espace Jean Moulin – 105, rue Jean Moulin 84240 La Tour d’Aigues
          </p>
        </div>
        <div data-aos="fade-left" className="formulaire-contact-container">
          <Formulaire />
        </div>
      </div>
      <div className="container-contact-deux">
        <h2 className="title-contact-deux">TARIFS</h2>
        <div className="container-consultation">
          <h3 className="title-consultation">Consultation au cabinet </h3>
          <p>Séance hypnose (durée moyenne 1h) : 60 €</p>
          <p>Séance préparation mentale : 70 €</p>
          <p> Forfait sevrage tabagique en 1 séance (2h) : 290 €</p>
          <p>Forfait gestion du poids (6 séances – 1h) : 490 €</p>
          <p>Séance de suivi : Gestion du poids et sevrage tabagique : 50 €</p>
          <p>
            Tarif réduit : étudiant et bénéficiaire du RSA (sur justificatif) :
            40 € / séance
          </p>
        </div>
        <div className="container-consultation-deux">
          <h3 className="title-consultation">
            Consultation à distance en visio (Skype, Teams ou Zoom)
          </h3>
          <p>Déplacement à domicile possible (tarifs sur demande)</p>
          <h3 className="title-consultation">
            Ateliers en présentiel ou à distance
          </h3>
          <p>Selon programme (max. 6 personnes) :</p>
          <p>
            (Techniques d’Optimisation du Potentiel (TOP)®, autohypnose, suivi
            gestion du poids, suivi post arrêt-tabac, motivation/confiance en
            soi, gestion du stress, sommeil…)
          </p>
          <p>Demi journée 40 € / Journée 80 €</p>
          <p>Dates et programmes sur </p>
          <div className="container-lien">
            <a
              href="https://www.facebook.com/B.Lozier/"
              target="_blank"
              rel="noreferrer"
              className="lien-programme"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="modaliter-container">
        <p className="cheque">Règlement par chèque ou espèces.</p>
        <p className="seance">
          Toute séance non annulée au minimum 24 heures à l’avance, sera due.
        </p>
        <p>
          Conformément aux articles L.616-1 et R.616-1 du code de la
          consommation, nous proposons un dispositif de médiation de la
          consommation. L’entité de médiation retenue est : CNPM – MEDIATION DE
          LA CONSOMMATION. En cas de litige, vous pouvez déposer votre
          réclamation sur son site : https://cnpm-mediation-consommation.eu ou
          par voie postale en écrivant à CNPM – MEDIATION – CONSOMMATION – 23,
          rue Terrenoire – 42100 SAINT ETIENNE
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ContactTarifs;
