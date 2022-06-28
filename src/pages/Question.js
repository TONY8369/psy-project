import React, { useState } from "react";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";

const Question = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDeux, setIsOpenDeux] = useState(false);
  const [isOpenTrois, setIsOpenTrois] = useState(false);
  const [isOpenQuatre, setIsOpenQuatre] = useState(false);
  const [isOpenCinq, setIsOpenCinq] = useState(false);
  const [isOpenSix, setIsOpenSix] = useState(false);
  const [isOpenSept, setIsOpenSept] = useState(false);
  const [isOpenHuit, setIsOpenHuit] = useState(false);
  const [isOpenNeuf, setIsOpenNeuf] = useState(false);
  return (
    <div>
      <Navigations />
      <h1 className="theme-title">L’hypnothérapie en questions</h1>
      <div className="question-big-container">
        <div className="container-question-un">
          {isOpen ? (
            <div className="container-aller">
              <p>
                L’hypnose thérapeutique induit un état de légère modification de
                conscience similaire à un état de rêverie, dans lequel votre
                attention est orientée vers un but spécifique. Guidé(e) par mes
                paroles, vous pourrez explorer vos ressources et capacités
                inexploitées, identifier des réponses, des solutions à la
                difficulté que vous voulez dépasser et réaliser une
                transformation intérieure positive. L’état d’hypnose n’entraîne
                en aucune façon un comportement que vous ne souhaitez pas.
                Durant une séance d’hypnothérapie vous n’êtes réceptif qu’à ce
                qui est bénéfique pour vous.
              </p>
              <img
                className="logoGo"
                src={`${require("../image/Go-into_36759.png")}`}
                alt="aller"
                onClick={() => setIsOpen(false)}
              />
            </div>
          ) : (
            <div className="container-retour">
              <p className="items">Que dois-je savoir sur l'hypnothérapie ? </p>
              <img
                className="logoBack"
                src={`${require("../image/back_icon-icons.com_52398.png")}`}
                alt="retour"
                onClick={() => setIsOpen(true)}
              />
            </div>
          )}
        </div>
        <div className="container-question-deux">
          {isOpenDeux ? (
            <div className="container-aller-deux">
              <p>
                On s’est tous posé cette question à un moment ou à un autre, et
                oui vous allez vous réveiller pour la bonne raison que vous ne
                dormez pas ! L’état hypnotique n’a rien à voir avec le sommeil.
                Il s’agit d’un état de conscience modifié s’apparentant à une
                «rêverie» éveillée. Si on laisse une personne en état d’hypnose
                seule, elle en sort spontanément au bout d’une vingtaine de
                minutes.
              </p>
              <img
                className="logoGo"
                src={`${require("../image/Go-into_36759.png")}`}
                alt="aller"
                onClick={() => setIsOpenDeux(false)}
              />
            </div>
          ) : (
            <div className="container-retour-deux">
              <p className="items">Et si je ne me réveillais pas ? </p>
              <img
                className="logoBack"
                src={`${require("../image/back_icon-icons.com_52398.png")}`}
                alt="retour"
                onClick={() => setIsOpenDeux(true)}
              />
            </div>
          )}
        </div>
        <div className="container-question-trois">
          {isOpenTrois ? (
            <div className="container-aller-trois">
              <p>
                Je n’agis que dans votre intérêt. C’est pourquoi c’est vous qui
                définissez votre propre objectif, et je m’assure toujours, pour
                prévenir tout risque, qu’il respecte vos besoins et qu’il n’y a
                pas d’inconvénients pour vous à l’atteindre. L’hypnose
                thérapeutique est un phénomène qui, par lui-même, permet des
                changements. C’est un outil puissant et efficace, mais en aucun
                cas il ne met le sujet en danger.
              </p>
              <img
                className="logoGo"
                src={`${require("../image/Go-into_36759.png")}`}
                alt="aller"
                onClick={() => setIsOpenTrois(false)}
              />
            </div>
          ) : (
            <div className="container-retour-trois">
              <p className="items">Y a t'il des risques ? </p>
              <img
                className="logoBack"
                src={`${require("../image/back_icon-icons.com_52398.png")}`}
                alt="retour"
                onClick={() => setIsOpenTrois(true)}
              />
            </div>
          )}
        </div>
        <div className="container-question-quatre">
          {isOpenQuatre ? (
            <div className="container-aller-quatre">
              <p>
                Au contraire, l’hypnothérapie permet de reprendre le contrôle
                sur soi. L’état modifié de conscience dans lequel vous serez va
                vous permettre une plus grande lucidité et flexibilité, vous
                devenez le pilote de votre cerveau ce qui va vous permettre
                d’atteindre l’objectif fixé au départ.
              </p>
              <img
                className="logoGo"
                src={`${require("../image/Go-into_36759.png")}`}
                alt="aller"
                onClick={() => setIsOpenQuatre(false)}
              />
            </div>
          ) : (
            <div className="container-retour-quatre">
              <p className="items">Vais-je perdre le contrôle ? </p>
              <img
                className="logoBack"
                src={`${require("../image/back_icon-icons.com_52398.png")}`}
                alt="retour"
                onClick={() => setIsOpenQuatre(true)}
              />
            </div>
          )}
        </div>
        <div className="container-question-cinq">
          {isOpenCinq ? (
            <div className="container-aller-cinq">
              <p>
                Ah non, l’hypnose thérapeutique n’est pas de la magie. D’une
                part c’est vous qui fixez les objectifs et les choses ne se font
                pas à votre insu, d’autre part tout ne se règle pas d’un
                claquement de doigt. Pour réussir, votre volonté et votre
                engagement sont déterminants. Il se peut que les choses se
                résolvent très rapidement en peu de séances, ou peut-être
                faudra-t-il à certains un peu plus de temps pour y arriver.
              </p>
              <img
                className="logoGo"
                src={`${require("../image/Go-into_36759.png")}`}
                alt="aller"
                onClick={() => setIsOpenCinq(false)}
              />
            </div>
          ) : (
            <div className="container-retour-cinq">
              <p className="items">C’est “magique ” ? </p>
              <img
                className="logoBack"
                src={`${require("../image/back_icon-icons.com_52398.png")}`}
                alt="retour"
                onClick={() => setIsOpenCinq(true)}
              />
            </div>
          )}
        </div>
        <div className="container-question-six">
          {isOpenSix ? (
            <div className="container-aller-six">
              <p>
                Certains arrêtent dès la fin de la première séance, d’autres ont
                besoin d’une deuxième séance. Il faut savoir respecter son
                propre rythme.
              </p>
              <img
                className="logoGo"
                src={`${require("../image/Go-into_36759.png")}`}
                alt="aller"
                onClick={() => setIsOpenSix(false)}
              />
            </div>
          ) : (
            <div className="container-retour-six">
              <p className="items">
                Combien faut-il de séance pour arrêter de fumer ?{" "}
              </p>
              <img
                className="logoBack"
                src={`${require("../image/back_icon-icons.com_52398.png")}`}
                alt="retour"
                onClick={() => setIsOpenSix(true)}
              />
            </div>
          )}
        </div>
        <div className="container-question-sept">
          {isOpenSept ? (
            <div className="container-aller-sept">
              <p>
                Chacun d’entre nous est hypnotisable puisqu’il s’agit d’un état
                naturel. Certains réagiront plus ou moins vite et/ou plus ou
                moins profondément.
              </p>
              <img
                className="logoGo"
                src={`${require("../image/Go-into_36759.png")}`}
                alt="aller"
                onClick={() => setIsOpenSept(false)}
              />
            </div>
          ) : (
            <div className="container-retour-sept">
              <p className="items">Est-ce que ça va marcher sur moi ? </p>
              <img
                className="logoBack"
                src={`${require("../image/back_icon-icons.com_52398.png")}`}
                alt="retour"
                onClick={() => setIsOpenSept(true)}
              />
            </div>
          )}
        </div>
        <div className="container-question-huit">
          {isOpenHuit ? (
            <div className="container-aller-huit">
              <p>
                Personne ne peut vous forcer à faire quoi que ce soit. Cela ne
                fonctionne tout simplement pas. Avec l’hypnose thérapeutique,
                vous gardez le contrôle de votre corps, les séances se déroulent
                de façon agréables et apaisées. L’état d’hypnose est un état
                naturel, dans lequel enfants et adultes se connectent
                quotidiennement. Vous seul êtes capable de savoir si les
                suggestions du thérapeute résonnent en vous ou non.
              </p>
              <img
                className="logoGo"
                src={`${require("../image/Go-into_36759.png")}`}
                alt="aller"
                onClick={() => setIsOpenHuit(false)}
              />
            </div>
          ) : (
            <div className="container-retour-huit">
              <p className="items">
                Et si l’hypnothérapeute essaie de me manipuler ?{" "}
              </p>
              <img
                className="logoBack"
                src={`${require("../image/back_icon-icons.com_52398.png")}`}
                alt="retour"
                onClick={() => setIsOpenHuit(true)}
              />
            </div>
          )}
        </div>
        <div className="container-question-neuf">
          {isOpenNeuf ? (
            <div className="container-aller-neuf">
              <p>
                Non cela n’a aucun rapport, ce n’est pas la profondeur de
                l’hypnose qui est garante de l’efficacité du processus. Certains
                sujets connaissent des transes plus profondes que d’autres,
                chaque sujet est unique, mais une transe légère amènera des
                changements aussi efficaces qu’une transe profonde.
              </p>
              <img
                className="logoGo"
                src={`${require("../image/Go-into_36759.png")}`}
                alt="aller"
                onClick={() => setIsOpenNeuf(false)}
              />
            </div>
          ) : (
            <div className="container-retour-neuf">
              <p className="items">
                Une hypnose profonde est-elle plus efficace ?{" "}
              </p>
              <img
                className="logoBack"
                src={`${require("../image/back_icon-icons.com_52398.png")}`}
                alt="retour"
                onClick={() => setIsOpenNeuf(true)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="container-conclusion-question">
        <div>
          <img
            src={`${require("../image/question-sur-lhypnose-blandine-lozier.jpg")}`}
            alt="question"
            className="image-question-un"
          />
        </div>
        <div>
          <p>
            Il n’y a pas de questions « naïves ». Lors de nos rencontres
            n’hésitez pas à me faire part de vos questionnements.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Question;
