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
          <div className="footerCol">
            <h4>STB SICAR</h4>
            <div>
              <ul className="unList">
                <Link className="FooterLink" to="/">
                  <li>Nous Connaître</li>
                </Link>
                <Link className="FooterLink" to="/">
                  <li>Nos Fonds</li>
                </Link>

                <Link className="FooterLink" to="/">
                  <li>Responsabilité Sociale</li>
                </Link>

                <Link className="FooterLink" to="/">
                  <li>Nos Réalisations</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="footerCol">
            <h4>Cadre Légal</h4>
            <ul className="unList">
              <Link className="FooterLink" to="/">
                <li>Types D'interventions</li>
              </Link>
              <Link className="FooterLink" to="/">
                <li>Modes de Financement</li>
              </Link>
              <Link className="FooterLink" to="/">
                <li>Nos Valeurs</li>
              </Link>
              <Link className="FooterLink" to="/privacy-policy">
                <li></li>
              </Link>
            </ul>
          </div>

          <div className="footerCol">
            <h4>Plus d'Info</h4>
            <ul className="unList">
              <Link className="FooterLink" to="/">
                <li>Contact</li>
              </Link>
              <Link className="FooterLink" to="/">
                <li>Nos Partenaires</li>
              </Link>
              <Link className="FooterLink" to="/">
                <li>Nos Publications</li>
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
          <small className="copyright">
            copyright STB SICAR © 2022 all rights reserved.
          </small>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
