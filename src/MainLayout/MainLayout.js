import React from "react";
import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "../Components/Navbar/navbar.css";
function MainLayout({ selected, children }) {
  return (
    <>
      <div className="nav-backgroung">
        <NavBar selected={selected} />
        <div className="nav-cover-escription">
          <h1>Societe d'Investissement a Capital Risque</h1>
          <p>
            Fondée en 1998. Filiale du groupe STB. Spécialisée dans le private
            equity.
          </p>
          <small>Partner of your success</small>
        </div>
      </div>
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
