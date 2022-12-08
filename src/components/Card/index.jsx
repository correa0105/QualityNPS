import React from 'react';
import { CardContainer, IconType, ContainerData } from "./styles";
import { IconContext } from "react-icons";

const Card = ({icone, tipo, valor, percentual, color}) => {
  return (
    <CardContainer>
      <IconType color={color}><IconContext.Provider value={{ color: "#FFFFFF", size: "30px" }}>{icone}</IconContext.Provider></IconType>
      <ContainerData>
        <h1>{tipo}</h1>
        <span>{valor}</span>
      </ContainerData>
      <p><span>{percentual}</span></p>
    </CardContainer>
  )
}

export { Card }