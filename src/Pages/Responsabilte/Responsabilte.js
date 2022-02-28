import React from "react";
import HeaderBackground from "../../Components/HeaderBackground/HeaderBackground";
import MainLayout from "../../MainLayout/MainLayout";
import Contribution from "./Contribution";

const Responsabilte = () => {
  const contribution = [
    {
      img: "",
      title: "Compétences et accès à l’emploi ",
      desc1:
        "4.4 : D’ici à 2030, augmenter considérablement le nombre de jeunes et d’adultes disposant des compétences, notamment techniques et professionnelles, nécessaires à l’emploi, à l’obtention d’un travail décent et à l’entrepreneuriat",
      desc2:
        "En 2021 et malgré la crise sanitaire,  la STB SICAR, qui compte 12 collaborateurs, a assuré la formation de 4 stagiaires aux métiers du capital investissement.Également et en application de sa politique d’ouverture sur l’université, la STB SICAR et dans le cadre du partenariat avec l’école supérieure des sciences et technologies du design, un challenge pour la rénovation de son siège social a été lancé et a concerné 40 étudiants.",
    },
    {
      img: "",
      title: "Lutte contre les discriminations ",
      desc1:
        "5.1 : Mettre fin, dans le monde entier, à toutes les formes de discrimination à l’égard des femmes et des filles.Participation et accès aux postes de direction 5.5 : Garantir la participation entière et effective des femmes et leur accès en toute égalité aux fonctions de direction à tous les niveaux de décision, dans la vie politique, économique et publique.",
      desc2:
        "L’effectif de STB SICAR est composé de 70% de femmes contre 30% d’hommes.La femme est représentée à hauteur de 20% dans son conseil d’administration.STB SICAR suit également la politique mise en œuvre auprès des entreprises qu’elle accompagne en ce qui concerne l’emploi des femmes et leur participation aux postes de responsabilité.",
    },
    {
      img: "",
      title: "Énergies renouvelables",
      desc1:
        "7.2 : D’ici à 2030, accroître nettement la part de l’énergie renouvelable dans le bouquet énergétique mondial",
      desc2:
        "En 2020, sur 7 projets financés 2 ont concerné des projets industriels d’énergies renouvelables. ",
    },
    {
      img: "",
      title: "Développement des TPE et PME",
      desc1:
        "8.3 : Promouvoir des politiques axées sur le développement qui favorisent des activités productives, la création d’emplois décents, l’entrepreneuriat, la créativité et l’innovation et stimulent la croissance des micro-entreprises et des petites et moyennes entreprises et facilitent leur intégration dans le secteur formel, y compris par l’accès aux services financiers",
      desc2:
        "Entre 2016 et 2020, la STB SICAR a contribué à la création voire maintien de plus de 1700 postes.Entre 2018 et 2020, plus de 20 projets de création et e développement de PME ont été approuvés.Pour la période 2016-2020, et si l’on se réfère au calcul du levier (Coût total des projets investis/Montant  investi), un dinar investi par la STB SICAR en draine en moyenne 8 en termes d’investissement.",
    },
    {
      img: "",
      title: "Industrialisation socio-économiquement durable",
      desc1:
        "9.2 : Promouvoir une industrialisation durable qui profite à tous et, d’ici à 2030, augmenter nettement la contribution de l’industrie à l’emploi et au produit intérieur brut, en fonction du contexte national, et la multiplier par deux dans les pays les moins avancés",
      desc2:
        "La STB SICAR a réalisé 297 investissements répartis sur tout le territoire dont 53% dans l’industrie. ",
    },
    {
      img: "",
      title: "Réduction des déchets",
      desc1:
        "12.5 : D’ici à 2030, réduire considérablement la production de déchets par la prévention, la réduction, le recyclage et la réutilisation",
      desc2:
        "La STB SICAR a fait un don du matériel informatique usagé à l’association « sharek » au profit d’étudiants tunisiens qui en ont besoin afin de poursuivre les programmes à distance.La STB SICAR a signé une convention de partenariat avec El Moraskal pour le recyclage du papier ",
    },
    {
      img: "",
      title: "Institutions exemplaires",
      desc1:
        "16.6 : Mettre en place des institutions efficaces, responsables et transparentes à tous les niveaux.Prise de décisions inclusive:16.7 : Faire en sorte que le dynamisme, l’ouverture, la participation et la représentation à tous les niveaux caractérisent la prise de décisions",
      desc2:
        "La STB SICAR promeut une gouvernance responsable auprès des entreprises en portefeuille et veille à la mise en place des comités d’audit, de rémunération, de risques, …etc lorsque la taille le permet. ",
    },
  ];
  return (
    <>
    <MainLayout>
      <HeaderBackground/>
    <div className="responsabilte">
      <div className="politique">
        <h4>Notre politique interne </h4>
        <p>
          Nous permettons à nos collaborateurs de grandir au sein de STB SICAR,
          aussi bien professionnellement que personnellement. Nous veillons à
          l’égalité entre tous et à l’accomplissement de chacun.
        </p>
        <h6>En Bref</h6>
        <div className="en__bref__img"></div>
      </div>
      <div className="pour_nos_participations">
        <p>
          Nous sommes conscients de la nécessité de prendre en considération les
          critères environnementaux, sociaux et de qualité de gouvernance (ESG)
          dans la politique d’investissement. Ainsi, nous avons établi une
          charte ESG. Nous sommes également très attachés à la qualité de
          l’approche et à la politique mise en œuvre par nos participations en
          ce qui concerne le respect de l’environnement et la gestion des
          ressources humaines. Pour ce faire, un questionnaire a été envoyé aux
          sociétés financées. Il s’appuie sur un socle commun comprenant des
          indicateurs quantitatifs portant sur les 3 grands thèmes ESG
          prioritaires de la STB SICAR.
        </p>
        <div className="pour_nos_participations__img"></div>
        <p>Ce questionnaire sera envoyé annuellement.</p>
      </div>
      <div className="contribution_Odd">
        <h5>
          La STB SICAR contribue aux objectifs de développement durable
          proportionnellement aux moyens dont elle dispose. Au regard de ses
          activités, elle contribue principalement aux 7 ODD suivants :
        </h5>
        {contribution.map(el=><Contribution  el={el}/>)}
      </div>
    </div>
    </MainLayout>
    </>
  );
};

export default Responsabilte;
