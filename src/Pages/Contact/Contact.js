import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FaxIcon from "@mui/icons-material/Fax";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Contact.css";
import MainLayout from "../../MainLayout/MainLayout";
import HeaderBackground from "../../Components/HeaderBackground/HeaderBackground";
import { Link } from "react-router-dom";
import LeafletMap from "../../Components/Leaflet/LeafletMap"

const Contact = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <MainLayout>
        <HeaderBackground />
        <div className="contact">
          <div>
            <h2>Contactez-Nous</h2>
          </div>
          <div className="central-form">
            <div className="col">
              <h2>
                Vous pouvez nous contacter pour toute information complémentaire
                📧.
              </h2>

              <div className="cordonnes__container">
                <div className="cordonnes">
                  <div>
                    <LocationOnIcon />
                    <h5>
                      {" "}
                      Siège social, Imm. El Emtiez. Centre Urbain Nord, 1003,
                      Tunis.
                    </h5>
                  </div>
                  <div>
                    <LocalPhoneIcon />
                    <h5>+216 71 238 729 - +216 71 233342</h5>
                  </div>
                  <div>
                    <FaxIcon />
                    <h5>+216 71 234 411</h5>
                  </div>

                  <div>
                    <MailOutlineIcon />
                    <h5>info@stbsicar.com.tn</h5>
                  </div>
                </div>
              </div>
              <div className="media__link">
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
            <div className="back-form">
              <form onSubmit="">
                <p>{banner}</p>
                <label htmlFor="name">Nom et Prénom</label>
                <input type="text" onChange={handleName} value={name} />

                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleEmail} value={email} />

                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  onChange={handleMessage}
                  value={message}
                />

                <div className="send-btn">
                  <button type="submit">
                    send
                    <i className="fa fa-paper-plane" />
                    {bool ? (
                      <b className="load">
                        <img src="" alt="image not responding" />
                      </b>
                    ) : (
                      ""
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="map">
          <LeafletMap />
          </div>
        </div>
        
      </MainLayout>
      
    </>
  );
};

export default Contact;
