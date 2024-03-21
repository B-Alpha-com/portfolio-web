import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container-footer">
          <div>
            <a>{/* <FontAwesomeIcon icon={}/> */}</a>
            <ul className="footer-unordered">
              <li>
                <a href="https://github.com/B-Alpha-com">
                  <FontAwesomeIcon icon={faGithub} className="footer-icon" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/OlasodeM">
                  <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                </a>
              </li>
            </ul>
          </div>

          <hr />
          <div>
            <p class="footer__text">© 2024 - developed by Mubarak</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
