import React from "react";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";

const Sevrage = () => {
  return (
    <div>
      <Navigations />
      <h1 className="theme-title">SEVRAGE TABAGIQUE</h1>
      <div className="container-sevrage-chef">
        <div className="container-sevrage-un">
          <div>
            <img
              src={`${require("../image/sevrage/arreter-de-fumer-cannes-nice-hypnose-blandine-lozier-1.jpg")}`}
              alt="stop-tabac"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <p className="gras">
              La méthode ARRET-TABAC.NET® pour arrêter de fumer en 1 séance
            </p>
            <p>
              Vous envisagez d’arrêter de fumer et peut-être depuis longtemps ?
              D’abord, il faut être conscient qu’arrêter de fumer n’est pas
              qu’une question de volonté. La cigarette engendre une dépendance
              physique et psychologique. Alors, même avec une volonté de fer, si
              votre corps vous réclame une cigarette vous allez avoir du mal à
              résister. Il existe pourtant une solution pour en finir avec la
              dépendance et cela sans prendre de médicaments ni de substituts
              nicotiniques.
            </p>
            <p>
              <span>
                Choisir la méthode ATN® est un excellent moyen d’arrêter de
                fumer totalement, définitivement et en douceur. Elle est
                indolore, agréable, naturelle et sans effets indésirables.
              </span>
            </p>
          </div>
        </div>
        <div className="container-sevrage-deux">
          <div>
            <p className="gras">
              Avant de devenir fumeur, vous avez été non-fumeur. Inscrit au plus
              profond de votre être, c’est cet état là que l’on va révéler avec
              la méthode ARRET-TABAC.NET®.
            </p>
          </div>
          <div>
            <img
              src={`${require("../image/gestion/blandine-lozier-hypnose-nice-Hypnotherapeute-fumer.png")}`}
              alt="blandine"
            />
          </div>
        </div>
        <div className="container-sevrage-trois">
          <div>
            <p className="grass">
              La méthode utilisée, ATN® (Arrêt Tabac Net) associe 3 techniques
              qui agissent en synergie pour traiter l’addiction : l’hypnose
              thérapeutique, la PNL, la cohérence cardiaque.
            </p>
          </div>
          <div>
            <p className="gras">Hypnose</p>
            <p>
              La séance d’hypnothérapie va permettre d’apaiser le système
              nerveux, puis d’engendrer un dégoût de la cigarette, de visualiser
              et de ressentir cette liberté retrouvée, d’activer la fierté
              d’avoir atteint votre objectif et de modifier en profondeur votre
              comportement vis-à-vis du tabac.
            </p>
          </div>
          <div>
            <p className="gras">Programmation Neuro-Linguistique</p>
            <p>
              La PNL est un ensemble de techniques destinées à programmer un
              comportement nouveau et sain, dans le but de vous débarrasser
              définitivement de la cigarette en une séance
            </p>
          </div>
          <div>
            <p className="gras">La cohérence cardiaque</p>
            <p>
              Méthode de respiration qui agit psychologiquement et physiquement
              et dont le but est de travailler sur la dépendance psychologique.
              Elle a été légèrement modifiée afin d’être plus efficace.
            </p>
          </div>
        </div>
        <div className="container-sevrage-quatre" data-aos="fade-up-left">
          <p className="gras">
            A l’issue de la séance, vous êtes définitivement libéré de ce
            poison.
          </p>
          <p>
            Un suivi vous est proposé pour optimiser votre démarche et éviter
            une rechute. Un accès internet réservé accessible 24H/24 vous permet
            de profiter de vidéos sur une durée de 16 jours dans le but de
            renforcer l’efficacité du processus.
          </p>
          <p className="gras">
            Par ailleurs, vous bénéficiez de la garantie à vie. Pour plus
            d’informations www.arret-tabac.net Tous les praticiens de la méthode
            Arrêt-Tabac.Net® sont hypnothérapeutes certifiés et spécialisés en
            sevrage tabagique. Ils ont été formés et validés par David VIGNERON,
            le concepteur de la méthode.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sevrage;
