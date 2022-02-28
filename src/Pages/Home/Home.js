import React from "react";
import Carousel from "react-elastic-carousel";
import MainLayout from "../../MainLayout/MainLayout";
import "./Home.css";
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
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <>
      <MainLayout>
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
                autoPlaySpeed={1800}
                outerSpacing={100}
                breakPoints={breakPoints}
                pagination={false}
                showArrows={false}
              >
                {cles.map((cle) => (
                  <p className="cle">
                    {cle.text1} <br /> {cle.text2}
                  </p>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="principes__dinvestissement">
            <h1>Principes d’investissement</h1>
            <div>{/* images */}</div>
          </div>
          <div className="modes__dintervention">
            <h1>Modes d’intervention</h1>
            <ul>
              <li>Les actions ordinaires (A.O) en sortie libre</li>
              <li>Les obligations convertibles en actions (O.C.A)</li>
              <li>Les avances sous forme de compte courant associé (C.C.A)</li>
            </ul>
          </div>
          <div className="etat__desprit">
            <h1>UN ÉTAT D'ESPRIT</h1>
            <h4>
              Nous plaçons la confiance comme valeur fondamentale d’un
              partenariat gagnant
            </h4>
            <div>
              <img src="" alt="" />
              <h5> UN ACCOMPAGNEMENT</h5>
              <p>
                Nous partageons la conviction que la valeur d’une PME repose sur
                la qualité de son équipe dirigeante. En tant qu’actionnaire,
                nous nous positionnons comme un partenaire actif aux côtés des
                dirigeants. Ainsi, nos critères d’investissement privilégient,
                au-delà de l‘analyse économique et industrielle de la société,
                la qualité et la motivation des dirigeants auxquels nous nous
                associons.
              </p>
            </div>
            <div>
              <img src="" alt="" />
              <h5> LES VALEURS QUI SE PARTAGENT</h5>
              <p>
                Partager les valeurs de respect, de loyauté et de transparence
                pour poser ensemble les fondations d’un partenariat durable et
                constructif. Notre philosophie d'investissement est résolument «
                non-intrusive », pour préserver la liberté d’action des
                dirigeants de l’entreprise. Ainsi, tous nos investissements
                s’effectuent en mode minoritaire, en fonds propres et
                quasi-fonds propres. Nous privilégions une durée moyenne de
                participation « raisonnable », comprise entre 5 et 7 ans.
              </p>
            </div>
            <div>
              <img src="" alt="" />
              <h5> UNE AVENTURE HUMAINE</h5>
              <p>
                Chaque partenariat est une aventure riche d’expériences
                partagées et d’ambitions assumées.
              </p>
            </div>
            <h4>NOTRE VALEUR AJOUTÉE</h4>
            <p>
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
