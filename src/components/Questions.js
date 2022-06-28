import React from "react";
import { NavLink } from "react-router-dom";

const Questions = () => {
  return (
    <div className="question-container">
      <div data-aos="flip-right" id="text-question">
        <h2 className="question-title">L’hypnothérapie en Questions</h2>
        <p className="paragraphe-question">
          L’hypnothérapie, et l’état d’hypnose, fascinent. Qui ne s’est pas un
          jour posé des questions sur ce qui pouvait bien se passer au cours
          d’une séance sans nécessairement oser poser la question…
        </p>
        <NavLink
          to="/questions"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <button className="button-question">En savoir +</button>
        </NavLink>
      </div>
      <div data-aos="flip-left" id="image-question">
        <img
          src="https://www.hypnocoaching-lozier.fr/wp-content/uploads/2019/12/blandine-lozier-hypnotherapeute-cannes-nice-hypnose-maigrir-coaching-stress.jpg"
          alt="Blandine"
          className="image-question"
        />
      </div>
    </div>
  );
};

export default Questions;
