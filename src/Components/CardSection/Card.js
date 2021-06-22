import React from 'react';
import {  CardBody, CardImgContainer, CardImg, CardTitle, CardText } from './CardElements';

function Card({img, title, text}) {
  return (
      <CardBody>
        <CardImgContainer>
          <CardImg src={img} />
        </CardImgContainer>
        <CardTitle className="px-3 pt-1">{title}</CardTitle>
        <CardText className="px-2">{text}</CardText>
      </CardBody>
  )
}

export default Card
