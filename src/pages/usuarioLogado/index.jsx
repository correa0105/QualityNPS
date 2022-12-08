import { Header } from "../../components/Header";
import { Item } from "../../components/Item";

import { Container, Logo, Row, RowItems } from "./styles"

const Logado = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <h1>Seja bem-bindo ao <Logo>Quality<span>NPS</span></Logo></h1>
            <Row>
                <h2>Você está logado no QualityNPS, o seu sistema de controle de qualidade através do conceito NPS (Net Promoter Score)</h2>
            </Row>
            <Row>
                <h2>Você pode nos solcicitar suportes através de um dos canais abaixo</h2>
            </Row>
            <RowItems>
                <Item title="AnyDesk" urlImg="https://www.svgrepo.com/show/331289/anydesk.svg"/>
                <Item title="TeamViewer" urlImg="https://upload.wikimedia.org/wikipedia/commons/3/31/TeamViewer_Logo_Icon_Only.svg"/>
                <Item title="WhatsApp" urlImg="https://cdn-icons-png.flaticon.com/512/174/174879.png"/>
                <Item title="Skype" urlImg="https://cdn-icons-png.flaticon.com/512/174/174869.png"/>
            </RowItems>
        </Container>
    </>)
}

export { Logado }