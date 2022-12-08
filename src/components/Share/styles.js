import styled from "styled-components";

export const ShareContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 55px;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const Text = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: #444444;
    margin-bottom: 1rem;
`

export const LocalShare = styled.div`
    background-color: #BDBDBD;
    border-radius: 18px;
    padding: .5rem;
    font-size: 4rem;
    text-align: center;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #A4A4A4;
    }
`