import styled from "styled-components";

export const Container = styled.main`
    max-width: 65%;
    margin: 0 auto;
    margin-top: 4rem;
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #444;
    background-color: rgba(162, 162, 162, 0.2);
    border-radius: 2rem;
    padding: 3rem;
    -webkit-box-shadow: 9px 9px 34px -11px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px 9px 34px -11px rgba(0,0,0,0.75);
    box-shadow: 9px 9px 34px -11px rgba(0,0,0,0.75);
`

export const ContainerTitulo = styled.div`
    max-width: 65%;
    margin: 0 auto;
    margin-top: 4rem;
    margin-bottom: 3rem;
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
`

export const TituloPagina = styled.h1`
    font-weight: 700;
    font-size: 2.3rem;
    color: #000000;
    margin-bottom: 3rem;
    width: 100%;
`

export const FormSpace = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;
    margin-bottom: 2rem;

    h2 {
        margin: 2rem 0;
        font-size: 2rem;
    }

    .InputForm:nth-child(8) div:nth-child(1) {
        display: flex;
        gap: .5rem;
    }

    .InputForm {
        display: flex;
        align-items: center;
        padding: 1rem 1rem;
        gap: 1rem;
        font-size: 1.5rem;
    }

    .InputForm:nth-child(even) {
        background-color: #9999;
    }

`

export const InputHTML = styled.textarea`
    height: 15rem;
    padding: .5rem;
    outline: none;
`
