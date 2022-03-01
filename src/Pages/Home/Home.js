import React from "react";
import Carousel from "react-elastic-carousel";
import MainLayout from "../../MainLayout/MainLayout";
import CustomCards from "../../Components/Cards/CustomCards";
import Cards from "../../Components/Cards/Cards";
import "./Home.css";
import investissment from "./investissment.png";
import acoompagnement from "./cart1.png";
import valeurs from "./cart2.png";
import aventure from "./cart3.png";
import colab from "./colab.png";
import part from "./part.png";

const Home = () => {
  const team = [
    {
      name: "foulan",
      descreption: "bla bla blabla bla blabla bla bla",
      img: "https://www.un.org/sites/un2.un.org/files/user.png",
    },
    {
      name: "foulan",
      descreption: "bla bla blabla bla blabla bla bla",
      img: "https://www.un.org/sites/un2.un.org/files/user.png",
    },
    {
      name: "foulan",
      descreption: "bla bla blabla bla blabla bla bla",
      img: "https://www.un.org/sites/un2.un.org/files/user.png",
    },
    {
      name: "foulan",
      descreption: "bla bla blabla bla blabla bla bla",
      img: "https://www.un.org/sites/un2.un.org/files/user.png",
    },
    {
      name: "foulan",
      descreption: "bla bla blabla bla blabla bla bla",
      img: "https://www.un.org/sites/un2.un.org/files/user.png",
    },
    {
      name: "foulan",
      descreption: "bla bla blabla bla blabla bla bla",
      img: "https://www.un.org/sites/un2.un.org/files/user.png",
    },
    {
      name: "foulan",
      descreption: "bla bla blabla bla blabla bla bla",
      img: "https://www.un.org/sites/un2.un.org/files/user.png",
    },
  ];
  const cles = [
    {
      text1: "23ans",
      text2: "D'expérience",
      classname: "one",
    },
    {
      text1: "128MDT",
      text2: "Sous gestion",
      classname: "cle",
    },
    {
      text1: "300",
      text2: "Investissement en portefeulle",
      classname: "one",
    },
    {
      text1: "58",
      text2: "Fonds gérés",
      classname: "cle",
    },
    {
      text1: "91",
      text2: "Sorties integrales réalisées",
      classname: "one",
    },
    {
      text1: "24",
      text2: "Régions",
      classname: "cle",
    },
    {
      text1: "1750 emplois",
      text2: "créés durant les 5 derniéres années",
      classname: "one",
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  const cardsdata = [
    {
      title: "Un Accompagnement",
      description:
        " Nous partageons la conviction que la valeur d’une PME repose sur la qualité de son équipe dirigeante. En tant qu’actionnaire, nous nous positionnons comme un partenaire actif aux côtés des dirigeants. Ainsi, nos critères d’investissement privilégient, au-delà de l‘analyse économique et industrielle de la société, la qualité et la motivation des dirigeants auxquels nous nous associons.",
    },
    {
      title: "Les Valeurs Qui Se Partagent",
      description:
        " Partager les valeurs de respect, de loyauté et de transparence pour poser ensemble les fondations d’un partenariat durable et constructif. Notre philosophie d'investissement est résolument non-intrusive », pour préserver la liberté d’action des dirigeants de l’entreprise. Ainsi, tous nos investissements s’effectuent en mode minoritaire, en fonds propres et quasi-fonds propres. Nous privilégions une durée moyenne de participation « raisonnable », comprise entre 5 et 7 ans.",
    },
    {
      title: "Une Aventue Humaine",
      description:
        "Chaque partenariat est une aventure riche d’expériences partagées et d’ambitions assumées.",
    },
  ].map((item, i) => ({ _id: "c-" + i, ...item }));
  const interdata = [
    { image: acoompagnement },
    { image: valeurs },
    { image: aventure },
  ];
  return (
    <>
      <MainLayout>
        <div className="nav-background">
          <div className="nav-cover-escription">
            <h1>Societe d'Investissement a Capital Risque</h1>
            <p>
              Fondée en 1998. Filiale du groupe STB. Spécialisée dans le private
              equity.
            </p>
            <small>Partner of your success</small>
          </div>
        </div>
        <div className="home__container">
          <div className="a_propos_de_nous">
            <h1 className="page-title">Nous Connaître</h1>
            <h3>Présentation STB SICAR</h3>
            <p className="page-description">
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
            <h3>Nos chiffres clés :</h3>
            <div className="cles__container">
              <Carousel
                itemPadding={[10, 50]}
                enableAutoPlay
                autoPlaySpeed={1800}
                outerSpacing={100}
                breakPoints={breakPoints}
                pagination={false}
                showArrows={false}
              >
                {cles.map((cle) => (
                  <p className={cle.classname} style={cle.Style}>
                    {cle.text1} <br /> {cle.text2}
                  </p>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="principes__dinvestissement">
            <h3>Principes d’investissement</h3>
            <div className="Image-investissement">
              <img src={investissment} alt="investissement" width="100%" />
            </div>
          </div>
          <div className="modes__dintervention">
            <h3>Modes d’intervention</h3>
            <div className="page-cards-interventions">
              <Cards data={interdata} />
            </div>
          </div>
          <div className="etat__desprit">
            <h2>UN ÉTAT D'ESPRIT</h2>
            <h4 className="home-main-subtitles">
              Nous plaçons la confiance comme valeur fondamentale d’un
              partenariat gagnant
            </h4>
            <img src={colab} alt="" className="esp-img" />
            <CustomCards data={cardsdata} />
            <img src={part} alt="" className="esp-img" />
            <h4 className="home-main-subtitles">Notre valeur ajoutée</h4>
            <p className="page-description">
              L’accompagnement des participations est une pierre angulaire du
              positionnement de la STB SICAR et un marqueur fort de sa
              stratégie. Notre expérience montre qu’en apportant des ressources
              et des compétences complémentaires à celles des équipes
              dirigeantes, nous pouvons contribuer significativement à la
              création de valeur stratégique de l’entreprise, tant sur le plan
              économique que social.
            </p>
          </div>
          <div className="notre__equipe">
            <Carousel
              itemPadding={[10, 50]}
              enableAutoPlay
              autoPlaySpeed={1800}
              outerSpacing={100}
              breakPoints={breakPoints}
              pagination={false}
              showArrows={false}
            >
              {team.map((user) => (
                <div>
                  <div>
                    <img src={user.img} alt="" />
                    <h2>{user.name}</h2>
                  </div>
                  <h5>{user.descreption}</h5>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
