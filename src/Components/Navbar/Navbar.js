import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavbarComponent({ selected }) {
  return (
    <>
      <div className="navbar">
        <Link className={selected === "HOME" && "active"} to="/">
          <img className="nav-logo" src="/logo.png" alt="STB SICAR logo" />
        </Link>
        <div className="nav-items-container">
          <Link className="nav-link" to="/">
            <p className="nav-item">Présentation</p>
          </Link>
          <Link className="nav-link" to="/nos-fonds">
            <p className="nav-item">Nos Fonds</p>
          </Link>
          <Link className="nav-link" to="/responsabilité-sociale">
            <p className="nav-item">Responsabilité Sociale</p>
          </Link>
          <Link className="nav-link" to="/nos-réalisations">
            <p className="nav-item">Nos Réalisations</p>
          </Link>
          <Link className="nav-link" to="/actualités">
            <p className="nav-item">Actualités</p>
          </Link>
          <Link className="nav-link" to="/contact">
            <p className="nav-item">Contact</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;
