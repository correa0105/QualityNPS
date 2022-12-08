import { Header } from "../../components/Header";
import { Circulo } from "../../components/Circulo";
import { Card } from "../../components/Card";
import { FaSortAmountDown } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import imgNPS from "../../assets/img/npsClassificacao.png"

import { Container, Title, SelectProfContainer, Select, Row, DashboardContainer, BorderDashboard, ItensContainer, NPSGrafico, QuadradoDado, NPSNivel, GraficoContainer, NPSContainer } from "./styles"

const Dashboard = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <SelectProfContainer>
                <Title>Dashboard</Title>
                <Select>
                    <option value="1">Igor</option>
                    <option value="2">Andressa</option>
                    <option value="3">Michele</option>
                </Select>
            </SelectProfContainer>
            <DashboardContainer>
                <Card icone={<GoGraph />} color="#04B431" tipo="Total de Avaliação" valor="487" percentual="NPS 17%" />
                <Card icone={<MdAutoGraph />} color="#045FB4" tipo="Mês Atual" valor="124" percentual="Avaliações subiram 21%" />
                <Card icone={<FaSortAmountDown />} color="#FACC2E" tipo="Mês Anterior" valor="78" percentual="" />
                <Circulo />
            </DashboardContainer>
            <BorderDashboard>
                <ItensContainer>
                    <div>
                        <QuadradoDado color="green">
                            <h2>% Promotores</h2>
                            <div>37.1%</div>
                        </QuadradoDado>
                        <QuadradoDado color="green">
                            <h2>Quantidade de Promotores</h2>
                            <div>46</div>
                        </QuadradoDado>
                        <QuadradoDado color="#EEAD2D">
                            <h2>% Neutros</h2>
                            <div>42.7%</div>
                        </QuadradoDado>
                        <QuadradoDado color="#EEAD2D">
                            <h2>Quantidade de Neutros</h2>
                            <div>53</div>
                        </QuadradoDado>
                        <QuadradoDado color="red">
                            <h2>% Detratores</h2>
                            <div>20.2%</div>
                        </QuadradoDado>
                        <QuadradoDado color="red">
                            <h2>Quantidade de Detratores</h2>
                            <div>25</div>
                        </QuadradoDado>
                    </div>
                    <div>
                        <NPSContainer>
                            <h2>NPS</h2>
                            <span>16.9</span>
                            <h3>Zona de Aperfeiçoamento</h3>
                        </NPSContainer>
                    </div>
                    <div>
                        <GraficoContainer>
                            <h2>Grafico</h2>
                            <div></div>
                        </GraficoContainer>
                    </div>
                </ItensContainer>
            </BorderDashboard>
            <Row>
                <NPSNivel src={imgNPS} />
                <div>
                    <h2>Zona de Aperfeiçoamento</h2>
                    Em primeiro lugar, esse é um momento de alerta para as empresas que estão nessa zona.
                    Ou seja, é hora de rever e ajustar alguns processos e entender por que o cliente disse: “Minha experiência foi boa, mas...”.
                    O feedback é uma forma inteligente de entender quais pontos precisam ser melhorados.
                    Interessante lembrar que essa zona possui um cenário diferente.
                    Isso porque uma empresa próxima do zero está gerando uma proposta de valor muito pior do que uma empresa com NPS 45.
                </div>
            </Row>
        </Container>
    </>)
}

export { Dashboard }