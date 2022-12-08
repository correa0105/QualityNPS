import styled from "styled-components";

export const Container = styled.main`
    max-width: 65%;
    margin: 0 auto;
    margin-top: 4rem;
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Titulo = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #21BBE1;
    margin-bottom: 4rem;
`

export const TituloPagina = styled.h1`
    font-weight: 700;
    font-size: 2.3rem;
    color: #000000;
    margin-bottom: 3rem;
    width: 100%;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
    }

    input {
        width: 35rem;
        margin-right: 2rem;
        padding: .7rem;
    }

    button {
        width: 15rem;
    }
`

export const CadastrosContainer = styled.table`
    margin-top: 3rem;
    width: 100%;
    color: #333;
    font-size: 1.5rem;

    tr {
        height: 4rem;
    }

    tr td {
        padding: 1rem;
    }

    tr:nth-child(even) {
        background-color: gray;
        color: #fff;
    }
    
    td:nth-child(5n) {
        text-align: center;
        font-size: 2.3rem;
        padding: 0;
        cursor: pointer;
    }

    td:nth-child(5n):hover {
        color: #21BBE1;
    }
`