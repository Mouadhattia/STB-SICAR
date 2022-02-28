import React, { useState } from "react";
import MainLayout from "../../MainLayout/MainLayout";
import Carousel from "react-elastic-carousel";
import "./Home.css";
const Home = () => {
  const [cles, setCles] = useState([
    {
      text1: "23ans",
      text2: "D'expérience",
    },
    {
      text1: "128MDT",
      text2: "Sous gestion",
    },
    {
      text1: "300",
      text2: "Investissement en portefeulle",
    },
    {
      text1: "58",
      text2: "Fonds gérés",
    },
    {
      text1: "91",
      text2: "Sorties integrales réalisées",
    },
    {
      text1: "24",
      text2: "Régions",
    },
    {
      text1: "1750 emplois",
      text2: "créés durant les 5 derniéres années",
    },
  ]);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <MainLayout selected="HOME">
        <div className="home__container">
          <div className="a_propos_de_nous">
            <h1>à propos de nous :</h1>
            <p>
              La STB SICAR, filiale de la STB BANK, a été créée le 23 mars 1998.
              C'est une société d’investissement à capital risque qui a pour
              objectif la participation, pour son propre compte ou pour le
              compte de bailleurs de fonds au renforcement des opportunités
              d’investissement et des fonds propres des entreprises. Elle permet
              de procurer aux entreprises les fonds nécessaires à leur
              développement et à leur croissance avec obligation de sortie.
            </p>
          </div>
          <div className="cles">
            <h1>Nos chiffres clés :</h1>
            <div className="cles__container">
              <Carousel
                itemPadding={[10, 50]}
                enableAutoPlay
                autoPlaySpeed={2500}
                outerSpacing={100}
                breakPoints={breakPoints}
              >
                {cles.map((cle) => (
                  <p className="cle">
                    {cle.text1} <br /> {cle.text2}
                  </p>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
