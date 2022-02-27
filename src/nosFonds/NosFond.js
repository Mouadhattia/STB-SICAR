import React from 'react'
import nosFond_img1 from "./img/nosFond_img1.png"
import nosFond_img2 from "./img/nosFond-img2.png"
import nosFond_img3 from "./img/nosFond-img3.png"
import nosFond_img4 from "./img/nosFond-img4.png"
import image_nosFond_second1 from "./img/image-nosFond-second-1.png"
import image_nosFond_second2 from "./img/image-nosFond-second-2.png"


const NosFond = () => {
  return (
    <>
        <div className='nosFonds'>
            <h1 className='nosFond-title-1'>NOS FONDS</h1>
            <div className='nosFond-container-1'>
                <h2 className='nosFond-title-2'>1-NOS INVESTISSEURS</h2>
                <p className='nosFond-parag-1'> STB SICAR dispose de fonds apportés par des investisseurs institutionnels de premier plan.</p>
                <div className='image-nosFond-first'>
                    <img className='image-nosFond-first-1' src={nosFond_img1} alt=""/>
                    <img className='image-nosFond-first-2' src={nosFond_img2} alt=""/>
                    <img className='image-nosFond-first-3'  src={nosFond_img3} alt="" />
                    <img className='image-nosFond-first-4'  src={nosFond_img4} alt="" />
                </div>
            </div>
            <div className='nosFond-container-2'>    
                <h2 className='nosFond-title-2'>2-OPTIMISEZ VOTRE FISCALITE</h2>
                <p className='nosFond-parag-2'>Les investisseurs qui désirent optimiser leur fiscalité peuvent confier tout ou partie de leurs bénéfices imposables à la STB SICAR sous forme de fonds géré.</p>
                <p className='nosFond-parag-2'> La règlementation en vigueur leur permet d’opter pour l’un des schémas suivants :</p>
                <div className='image-nosFond-second'>
                    <img className='image_nosFond_second1' src={image_nosFond_second1}></img>
                    <img className='image_nosFond_second2' src={image_nosFond_second2}></img>
                    {/* <img className='image-nosFond-second-3'></img> */}
                </div>


                <div className='nosFond-delai'>
                    <h3 className='nosFond-title-3'>Délai </h3>
                    <p className='nosFond-parag-3'>Les investisseurs bénéficient de l’avantage fiscal l’année de libération du fonds.</p>
                    <p className='nosFond-parag-3'>Néanmoins l’obligation d’utilisation des montants déposés est de 2 ans à partir de l’année de libération.</p>
                </div>
                <div className='nosFond-blockage'>
                    <h3 className='nosFond-title-3'>Blocage des fonds</h3>
                    <p className='nosFond-parag'>Le fonds géré est bloqué auprès de la <strong>STB SICAR </strong> pendant cinq ans à partir du 1er janvier de l’année qui suit celle du dépôt des fonds.</p>
                </div>
                <div className='nosFond-remuniration'>
                    <h3 className='nosFond-title-3'>Blocage des fonds</h3>
                    <p className='nosFond-parag3'>Le bailleur de fonds bénéficiera également conformément à la convention Fonds géré :</p>
                    <ul className='nosFond-remuniration-ul'>
                        <li className='nosFond-remuniration-li'>-	De la rémunération des fonds à des conditions très avantageuses jusqu’à leur utilisation dans des projets ayant obtenu au préalable son accord de participation</li>
                        <li className='nosFond-remuniration-li'>-	Du produit des intérêts des OCA/CCA souscrits</li>
                        <li className='nosFond-remuniration-li'>-	Des revenus du portefeuille d’investissement</li>
                        <li className='nosFond-remuniration-li'>-	Des dividendes distribués</li>
                    </ul>
                </div>
                <div className='nosFond_autre_avantage'>
                    <h3 className='nosFond-title-3'>Autre avantage</h3>
                    <p className='nosFond-parag3'>Est déductible du bénéfice imposable, la plus-value de cession d’actions et des parts sociales réalisées. </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default NosFond