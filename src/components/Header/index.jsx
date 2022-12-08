import { Link } from "react-router-dom";

import { MdArrowDropDown } from "react-icons/md";
import { IconContext } from "react-icons";

import React from "react";
import { Button } from "../Button";

import { Container, MenuItem, RowLeft, RowRight, UserPicture, Wrapper } from "./styles";

const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <RowLeft>
                    <Link to="/"><h1>Quality<span>NPS</span></h1></Link>
                </RowLeft>
                <RowRight>
                    {(autenticado) ? (
                        <ul>
                            <MenuItem variant="logado"><Link to="/dashboard"><a href="#">Dashboard</a></Link></MenuItem>
                            <MenuItem variant="logado"><Link to="/cadastros"><a href="#">Cadastros</a></Link></MenuItem>
                            <MenuItem variant="logado"><Link to="/configuracao"><a href="#">Configurações</a></Link></MenuItem>
                            <MenuItem variant="pesquisa"><Link to="/pesquisa"><a href="#" variant="pesquisa">Enviar Pesquisa</a></Link></MenuItem>
                            <UserPicture src="https://avatars.githubusercontent.com/u/65604927?v=4" />
                            <IconContext.Provider value={{ color: "#000000", size: "25px" }}><MdArrowDropDown /></IconContext.Provider>
                        </ul>
                    ) : (
                    <ul>
                        <MenuItem><Link to="/nps"><a href="#">Oque é NPS?</a></Link></MenuItem>
                        <MenuItem><Button title="Cadastrar" /></MenuItem>
                        <MenuItem><Link to="/logado"><Button title="Entrar" /></Link></MenuItem>
                    </ul> )}
                </RowRight>
            </Container>
        </Wrapper>
    )
}

export { Header }