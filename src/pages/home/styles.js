import styled from "styled-components";

export const Container = styled.main`
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    align-items: center;
    gap: 9rem;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const ContainerForm = styled.div`
    width: 65%;
    margin: 0 auto;
`

export const Title = styled.h2`
    font-weight: 700;
    font-size: 3.2rem;
    margin-bottom: 20px;
    line-height: 44px;
    color: #000000;

    span {
        font-size: 2.8rem;
        color: #21BBE1;
    }
`

export const TitleLogin = styled.p`
    font-weight: 700;
    font-size: 3.2rem;
    margin-bottom: 20px;
    line-height: 44px;
    color: #21BBE1;
`

export const SubTitleLogin = styled.p`
    font-weight: 700;
    font-size: 1.8rem;;
    margin-bottom: 35px;
    line-height: 25px;
    color: #000000;
`

export const EsqueciText = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #000000;

    &:hover {
        cursor: pointer;
    }
`

export const CriarText = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #088A29;

    &:hover {
        cursor: pointer;
    }
`