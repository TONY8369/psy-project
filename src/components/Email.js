import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Email = () => {
  return (
    <div className="email-container">
      <CopyToClipboard text="contact@hypnocoaching-lozier.fr" className="hover">
        <p
          style={{ cursor: "pointer" }}
          className="clipboard"
          onClick={() => {
            alert("Email copié !");
          }}
        >
          <img
            className="email"
            src="https://www.hypnocoaching-lozier.fr/wp-content/plugins/social-media-buttons-toolbar/inc/img/social-media-icons/email.png"
            alt="email"
          />
        </p>
      </CopyToClipboard>
    </div>
  );
};

export default Email;
