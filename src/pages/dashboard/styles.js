import styled, { css } from "styled-components";

export const Container = styled.main`
    max-width: 65%;
    margin: 0 auto;
    margin-top: 4rem;
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SelectProfContainer = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #21BBE1;
`

export const Select = styled.select`
    width: 30rem;
    height: 3rem;
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 2.3rem;
    color: #000000;
    margin-bottom: 3rem;
    width: 100%;
`

export const DashboardContainer = styled.div`
    display: flex;
    gap: 4rem;
    margin-top: 4rem;
`

export const BorderDashboard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #888;
    width: 100%;
    margin-top: 5rem;
    padding: 3rem;
    border-radius: .8rem;
`

export const ItensContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr .6fr .7fr;

    div {
        display: flex;
        flex-flow: row wrap;
        gap: 2rem;
    }
`

export const QuadradoDado = styled.div`
    width: 45%;

    h2 {
        text-align: center;
        color: #246690;
        width: 100%;
        white-space: nowrap;
        font-size: 1.2rem;
    }

    div {
        ${({ color }) => color && css`
        background-color: ${color};
        `}
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 2rem 0;
        font-size: 2rem
    }
`

export const NPSContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
        text-align: center;
        width: 100%;
        color: #246690;
    }

    span {
        border-top: 1px solid #888;
        border-bottom: 1px solid #888;
        width: 100%;
        text-align: center;
        color: #246690;
        padding: 1.5rem;
        font-size: 2rem;
        font-weight: 700;
    }

    h3 {
        width: 100%;
        height: 64%;
        font-size: 2rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #EEAD2D;
    }
`
export const GraficoContainer = styled.div`
    width: 100%;    

    h2 {
        width: 100%;
        text-align: center;
        color: #246690;
    }

    div {
        width: 100%;
        height: 88%;
        display: flex;
        flex-direction: column;
        alignt-items: center;
        border: 1px solid #555;
        margin-left: 2.5rem;
    }
`

export const NPSNivel = styled.img`
    width: 60%;
    height: auto;
`

export const NPSGrafico = styled.img`
    width: 45%;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1.5rem;

    div {
        h2 {
            margin-bottom: 1rem;
        }

        color: #444;
        font-size: 1.3rem;
    }
`