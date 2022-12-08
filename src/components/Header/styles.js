import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    background-color: #F2F2F2;
    width: 100%;
    display: flex;
    padding: .8rem 0;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #21BBE1;
`

export const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const RowLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    h1 {
        font-size: 2.5rem;
        color: #21BBE1;

        span {
            color: #FFFFFF;
            -webkit-text-stroke: 1px #21BBE1;
        }
    }
`

export const RowRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        path {
            cursor: pointer;
        }
    }
`

export const MenuItem = styled.li`
    white-space: nowrap;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    list-style: none;
    position: relative;

    a {
        text-decoration: none;
        font-size: 2rem;
        color: #000000;
        margin-right: 1rem;

        ${({ variant }) => variant === "pesquisa" && css`
            color: #DBA901;
        `}
    }
    
    a:hover {
        color: #21BBE1;
        ${({ variant }) => variant === "pesquisa" && css`
            color: #000000;
        `}
    }

    ${({ variant }) => variant === "logado" && css`

    &::after {
        content: "";
        position: absolute;
        height: 0.3rem;
        width: 0;
        bottom: -5px;
        left: 50%;
        background: #21BBE1;
        transition: all 300ms ease-in-out;
    }

    &:hover::after{
        width: 100%;
        left: -5px;
    }
    `}
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFFFF;
`