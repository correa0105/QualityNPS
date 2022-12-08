import styled, { css } from "styled-components";

export const VotoType = styled.div`
    color: #FFFF;
    border-radius: 1rem;
    width: 7rem;
    height: 7rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;

    &:hover {
        opacity: 0.8;
    }

    ${({ cor }) => cor && css`
    background-color: ${cor};
    `}
`

