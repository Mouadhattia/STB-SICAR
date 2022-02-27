import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaxIcon from '@mui/icons-material/Fax';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GoogleMapReact from 'google-map-react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "./Contact.css";

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
    <div className="contact">
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            Vous pouvez nous contacter pour toute information complémentaire.
          </h2>

          <div className="cordonnes__container">
            <h2>Coordonnees</h2>
            <div className="cordonnes">
              <div>
                <LocationOnIcon/>
                <h5> Siège social, Imm. El Emtiez. <br /> Centre Urbain Nord, 1003, Tunis.</h5>
              </div>
              <div>
               <LocalPhoneIcon/>
               <h5>
               +216 71 238 729 - +216 71 233342
               </h5>
               <div>
                 <FaxIcon/>
                 <h5>+216 71 234 411</h5>
               </div>
               <MailOutlineIcon/>
               <h5>info@stbsicar.com.tn</h5>
               <div>

               </div>
              </div>
            </div>
          </div>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
          </div>
          <form onSubmit="">
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

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

      </div>
    </div>
  );
};

export default Contact;
