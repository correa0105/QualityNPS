import styled from "styled-components";

export const Container = styled.main`
    max-width: 55%;
    margin: 3rem auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #999;
    border-radius: 10px;
    padding: 4rem;
    color: #444;

    h3 {
        font-size: 2rem;
        margin-bottom: 3rem;
        font-weight: 500;
    }

    h1 {
        width: 100%;
        color: #444;
        font-weight: 400;
    }

    h2 {
        margin-top: 4rem;
        margin-bottom: 2.5rem;
        width: 100%;
        text-align: left;
        font-size: 1.8rem;
        font-weight: 600;
    }

    div:nth-child(4) {
        margin-bottom: 4rem;
    }

    img {
        margin-top: 3rem;
    }
`

export const ContainerVotos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    margin-top: 3rem;
`