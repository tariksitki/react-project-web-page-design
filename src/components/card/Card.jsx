
import React from 'react'
import { useNavigate } from 'react-router';
import { CardContainer } from './CardStyles';

const Card = ({imageUrl, title, text, navigateUrl}) => {
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(navigateUrl) } >
        <img src={imageUrl} alt="imageUrl" />
        <h3>{title} </h3>
        <p>{text} </p>
    </CardContainer>
  )
};

export default Card;