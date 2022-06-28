import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Telephone = () => {
  return (
    <div className="phone-container">
      <CopyToClipboard text="06 61 19 07 68" className="hover">
        <p
          style={{ cursor: "pointer" }}
          className="clipboard"
          onClick={() => {
            alert("Téléphone copié !");
          }}
        >
          <img
            className="telephone"
            src="https://www.hypnocoaching-lozier.fr/wp-content/plugins/social-media-buttons-toolbar/inc/img/social-media-icons/telephone.png"
            alt="telephone"
          />
        </p>
      </CopyToClipboard>
    </div>
  );
};

export default Telephone;
