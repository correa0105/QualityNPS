import React from "react";
import { VotoType } from "./styles";

const Voto = ({ numero, cor, }) => {
    return (
        <VotoType cor={cor}>
            {numero}
        </VotoType>
    )
}

export { Voto }