import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function FooterComponent() {
  return (
    <div className="Footer">
      <div className="footerContainer">
        <div className="row">
          <div className="footerCol logo-description-container">
            <img
              className="footer-logo"
              src="/footerlogo1.png"
              alt="STB SICAR logo"
            />
          </div>
          <div className="footerCol">
            <h4>Présentation</h4>
            <div>
              <ul className="unList">
                <Link className="FooterLink" to="/">
                  <li className="footerItem">Nous Connaître</li>
                </Link>
                <Link className="FooterLink" to="/">
                  <li className="footerItem">Nos Fonds</li>
                </Link>

                <Link className="FooterLink" to="/">
                  <li className="footerItem">Responsabilité Sociale</li>
                </Link>

                <Link className="FooterLink" to="/">
                  <li className="footerItem">Nos Réalisations</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="footerCol">
            <h4>Liens Utiles</h4>
            <ul className="unList">
              <Link className="FooterLink" to="/contact">
                <li className="footerItem">Contact</li>
              </Link>
              <Link className="FooterLink" to="/">
                <li className="footerItem">Nos Partenaires</li>
              </Link>
              <Link className="FooterLink" to="/">
                <li className="footerItem">Nos Publications</li>
              </Link>
            </ul>
          </div>

          <div className="footerCol">
            <h4>Follow us</h4>
            <div>
              <Link to="/" className="socialLink">
                <FacebookIcon />
              </Link>

              <Link to="/" className="socialLink">
                <LinkedInIcon />
              </Link>

              <Link to="/" className="socialLink">
                <TwitterIcon />
              </Link>
              <Link to="/" className="socialLink">
                <YouTubeIcon />
              </Link>
            </div>
          </div>
        </div>
        <small className="copyright">
          STB SICAR © 2022 All rights reserved.
        </small>
      </div>
    </div>
  );
}

export default FooterComponent;
