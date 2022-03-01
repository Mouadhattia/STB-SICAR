import React from "react";
import CardActualite from "../../Components/CardActualite/CardActualite";
import HeaderBackground from "../../Components/HeaderBackground/HeaderBackground";
import MainLayout from "../../MainLayout/MainLayout";
import "./Actualites.css";

const Actualites = () => {
  const actualites = [
 
    {
      title:"La liste des candidats présélectionnés pour le concours",
      desc:"La Société Tunisienne de Banque proclame les résultats préliminaires des candidats retenus qui seront invités à passer des épreuves écrites à l’institut de financement du développement du Maghreb Arabe.",
      img:'https://www.stb.com.tn/uploads/covers/IMG20210619185706.png'
    },
    {
      title: "AVIS DE REPORT : APPEL D’OFFRES REF. AO 02/2022",
      desc:'AVIS DE REPORT   APPEL D’OFFRES REF. AO 02/2022     Acquisition d’une solution SAAS de gestion Intégrée     Il est porté à la connaissance des participants à l’Appel d’offres',
      img: 'https://www.stb.com.tn/uploads/covers/IMG20150519152621.png'
    },
    {
      title:"Entretien Exclusif avec M. Lotfi Debbabi, Directeur Général de la STB Bank: La Nouvelle Normalité",
      desc:"La crise de COVID-19 et le confinement ont bouleversé les paramètres d’activité de tous les secteurs économiques, mais surtout les modes de comportements sociaux.",
      img:'https://www.stb.com.tn/uploads/covers/IMG20200212220659.png'
    },
    {
      title:"La STB BANK primée pour ses efforts de développement à l’International",
      desc:"La STB BANK primée pour ses efforts de développement à l’International Une nouvelle consécration pour la STB BANK qui se distingue une fois de plus à l’échelle Internationale. Le samedi 29 Janvier 2022.",
      img:'https://www.stb.com.tn/uploads/covers/IMG20150519152621.png'
    }
  ];

  return (
    <>
      <MainLayout>
        <HeaderBackground />
        <div className="actuallite">
          <h1>Actualités</h1>
          {actualites.map((actualite) => (
            <CardActualite actualite ={actualite} />
          ))}
          <div className="actuallite__buttons">
            <button className="next">Précédent</button>
            <button className="priv">Suivant</button>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Actualites;
