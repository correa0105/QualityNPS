import styled from "styled-components";

export const Container = styled.main`
    max-width: 65%;
    margin: 0 auto;
    margin-top: 8rem;
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin: 4rem 0 1rem 0;
        border: 3px solid #000000;
    }
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 3.2rem;
    color: #000000;
    margin-bottom: 3rem;

    span {
        font-size: 2.8rem;
        color: #21BBE1;
    }
`

export const SubTitle = styled.h2`
    font-weight: 500;
    font-size: 2.4rem;
    color: #000000;
    margin: 3rem 0;
    text-align: left;
    width: 100%;
`

export const Text = styled.p`
    font-size: 1.5rem;
    line-height: 22 px;
    color: #000000;
    text-align: justify;
    width: 100%; 
`

export const TextPromotor = styled.span`
    font-size: 2.2rem;
    color: #008000;
`

export const TextDetrator = styled.span`
    font-size: 2.2rem;
    color: #FF0000;
`

export const VerMais = styled.p`
    cursor: pointer;
    color: #0040FF;
    font-size: 2.2rem;
    width: 100%;
    text-align: left;
    margin-top: 2rem;
`