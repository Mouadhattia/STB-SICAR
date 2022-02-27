import React from "react";
import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
function MainLayout({ selected, children }) {
  return (
    <>
      <NavBar selected={selected} />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
