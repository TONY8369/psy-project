import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Formulaire = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        process.env.REACT_APP_ID,
        process.env.REACT_APP_TEMPLATES,
        form.current,
        process.env.REACT_APP_USER
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message Envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            " <p class='error'> Une érreur s'est produite, veuillez rééssayer !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Nom / Prenom</label>
        <input type="text" name="name" required autoComplete="off" />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Services</label>
        <input type="text" name="services" required autoComplete="off" />
        <label>Message</label>
        <textarea name="message" required autoComplete="off" />
        <input type="submit" value="Envoyer" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default Formulaire;
