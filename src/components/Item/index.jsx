import React from "react";
import { ItemContainer } from "./styles";

const Item = ({title, urlImg}) => {
    return (
        <ItemContainer>
            <h1>{title}</h1>
            <img src={urlImg} alt="Teste" />
        </ItemContainer>
    )
}

export { Item }