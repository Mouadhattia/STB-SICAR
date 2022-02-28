import React from 'react'

const Contribution = ({el}) => {
  return (
    <div>
      <img src={el.img} alt="img" />
      <h4>{el.title} </h4>
      <p>{el.desc1}</p>
      <p>{el.desc2}</p>
      </div>

  )
}

export default Contribution