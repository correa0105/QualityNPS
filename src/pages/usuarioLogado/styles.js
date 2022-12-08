import styled from "styled-components";

export const Container = styled.main`
    max-width: 65%;
    margin: 0 auto;
    margin-top: 8rem;
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #555;    

    h1 {
        font-size: 3rem;
        color: #555;
    }
`

export const Logo = styled.span`
    font-size: 3rem;
    color: #21BBE1;

    span {
        color: #FFFFFF;
        -webkit-text-stroke: 1px #21BBE1;
    }
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
`

export const RowItems = styled.div`
    display: flex;
    align-items: center;
    margin-top: 6rem;
    gap: 10rem;
`