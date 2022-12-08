import { MdEmail, MdLock } from "react-icons/md";
import { IconContext } from "react-icons";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Column, Container, CriarText, ContainerForm, EsqueciText, Row, SubTitleLogin, Title, TitleLogin } from "./styles"

const Home = () => {
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    Conheça seus clientes e colaboradores melhor do que nunca usando o nosso software de NPS®
                    <br /><span>Saia do achismo! Nossa ferramenta NPS® vai te ajudar a tomar as melhores decisões, aumentar a satisfação de seus clientes e turbinar seu negócio.</span>
                </Title>
            </Column>
            <Column>
                <ContainerForm>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form>
                        <Input placeholder="Email" leftIcon={<IconContext.Provider value={{ color: "#000000" }}><MdEmail /></IconContext.Provider>} />
                        <Input placeholder="Senha" type="password" leftIcon={<IconContext.Provider value={{ color: "#000000" }}><MdLock /></IconContext.Provider>} />
                        <Button title="Entrar" variant="secondary" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </ContainerForm>
            </Column>
        </Container>
    </>)
}

export { Home }