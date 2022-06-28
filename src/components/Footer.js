import React from "react";
import Email from "./Email";
import Telephone from "./Telephone";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-image-un">
        <a
          href="https://www.facebook.com/B.Lozier/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.hypnocoaching-lozier.fr/wp-content/plugins/social-media-buttons-toolbar/inc/img/social-media-icons/facebook.png"
            alt="facebook"
            className="facebook"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/blandinelozier/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.hypnocoaching-lozier.fr/wp-content/plugins/social-media-buttons-toolbar/inc/img/social-media-icons/linkedin.png"
            alt="linkedin"
            className="linkedin"
          />
        </a>
      </div>
      <div className="footer-image-deux">
        <Telephone />
      </div>
      <div className="footer-image-trois">
        <Email />
      </div>
    </div>
  );
};

export default Footer;
