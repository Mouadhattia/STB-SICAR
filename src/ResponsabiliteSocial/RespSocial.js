import React from 'react'
import image_resp1 from "./img/image_resp1.png"
import image_resp2 from "./img/image_resp2.png"

const RespSocial = () => {
  return (
    <>
      <div className='Resp_social'>
        <h1 className='big_title'>RESPONSABILITE SOCIALE</h1>
        <div className='politique_interne'>
          <h2 className='title1'>1-Notre politique interne </h2>
          <p className='resp_parag'>Nous permettons à nos collaborateurs de grandir au sein de STB SICAR, aussi bien professionnellement que personnellement. Nous veillons à l’égalité entre tous et à l’accomplissement de chacun.</p>
          <p><strong>En Bref</strong></p>
          <img className='image_resp1' src={image_resp1}></img>
        </div>
        <div>
          <h2  className='title1'>2-	Pour nos participations</h2>
          <p>Nous sommes conscients de la nécessité de prendre en considération les critères environnementaux, sociaux et de qualité de gouvernance (ESG) dans la politique d’investissement. Ainsi, nous avons établi une charte ESG.   </p>
          <p>Nous sommes également très attachés à la qualité de l’approche et à la politique mise en œuvre par nos participations en ce qui concerne le respect de l’environnement et la gestion des ressources humaines. Pour ce faire, un questionnaire a été envoyé aux sociétés financées. Il s’appuie sur un socle commun comprenant des indicateurs quantitatifs portant sur les 3 grands thèmes ESG prioritaires de la STB SICAR.  </p>
          <img className='image_resp2' src={image_resp2} ></img>
          <p>Ce questionnaire sera envoyé annuellement.</p>
        </div>
      </div>
    </>
  )
}

export default RespSocial