import React from "react";
import CardActualite from "../../Components/CardActualite/CardActualite";
import HeaderBackground from "../../Components/HeaderBackground/HeaderBackground";
import MainLayout from "../../MainLayout/MainLayout";

const Actualites = () => {
  return (
    <>
      <MainLayout>
        <HeaderBackground />
        <CardActualite />
      </MainLayout>
    </>
  );
};

export default Actualites;
