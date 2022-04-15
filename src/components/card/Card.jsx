
import React from 'react'
import { CardContainer } from './CardStyles';

const Card = ({imageUrl, title, text}) => {
  return (
    <CardContainer>
        <img src={imageUrl} alt="imageUrl" />
        <h3>{title} </h3>
        <p>{text} </p>
    </CardContainer>
  )
}

export default Card;