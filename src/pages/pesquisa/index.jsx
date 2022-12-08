import { Container, ContainerVotos } from "./styles"
import { Voto } from "../../components/Voto";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logoNPS from "../../assets/img/logoNPS.png";
import { Link } from "react-router-dom";

const Pesquisa = () => {
    return (<>
        <Container>
            <h3>Olá <span>Lucas Corrêa</span>, bem-vindo ao questionario avaliação de seu professor Igor, participe de nossa avaliação e nos ajude a manter um bom controle de qualidade, e excelencia no atendimento.</h3>
            <h1>Considerando a experiência que você teve com nosso professor, o quanto você recomendaria a nossa academia para um amigo ou familiar?</h1>
            <ContainerVotos>
                <Voto numero="0" cor="#B72325" />
                <Voto numero="1" cor="#D51F29" />
                <Voto numero="2" cor="#E95323" />
                <Voto numero="3" cor="#EB6F23" />
                <Voto numero="4" cor="#F6A825" />
                <Voto numero="5" cor="#FDC728" />
                <Voto numero="6" cor="#EBDB0C" />
                <Voto numero="7" cor="#EBDB0C" />
                <Voto numero="8" cor="#C2D235" />
                <Voto numero="9" cor="#AEC93C" />
                <Voto numero="10" cor="#66B44E" />
            </ContainerVotos>
            <h2>Em poucas palavras, descreva o motivo da sua nota</h2>
            <Input id="botao" placeholder="Digite aqui sua resposta..."/>
            <Link to="/agradecimento"><Button title="Enviar" /></Link>
            <img src={logoNPS} alt="Logo" width="70px"/>
        </Container>
    </>)
}

export { Pesquisa }