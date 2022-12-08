import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    color: #000000;
    border: 1px solid #000000;
    border-radius: 2.2rem;
    padding: .6rem 1.2rem   ;
    min-width: 120px;
    width: 100%;
    position: relative;

    &:hover {
        cursor: pointer;
        background-color: #21BBE1;
        border: 1px solid #21BBE1;
    }

    ${({ variant }) => variant !== "primary" && css`
        background-color: #000000;
        min-width: 167px;
        color: #FFFFFF;

        &:hover {
            background-color: #21BBE1;
        }
    `}
`

