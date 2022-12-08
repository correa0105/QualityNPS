import styled, { css } from "styled-components";

export const CardContainer = styled.div`
    width: 26rem;
    height: 14rem;
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0px 9px 15px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 9px 15px 2px rgba(0,0,0,0.75);
    box-shadow: 0px 9px 15px 2px rgba(0,0,0,0.75);
    position: relative;
    justify-content: space-between;

    p {
        color: #0B6121;
        font-weight: 400;
        padding: 0 0 1rem 2rem;

        span {
            font-size: 1.6rem;
            color: #0009;
            font-weight: 700;
        }
    }

    
`

export const ContainerData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 1rem 1.5rem 0 0;

    h1 {
        font-size: 1.5rem;
        font-weight: 400;
        color: #A4A4A4;
    }

    span {
        font-size: 2rem;
        font-weight: bold;
        color: #000000;
    }
`

export const IconType = styled.div`
    ${({ color }) => color && css`
    background-color: ${color};
    `}
    color: #000000;
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 16px;
    position: absolute;
    top: -15%;
    left: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 9px 30px -12px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 9px 30px -12px rgba(0,0,0,0.75);
    box-shadow: 0px 9px 30px -12px rgba(0,0,0,0.75);
`