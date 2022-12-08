import { Header } from "../../components/Header";
import { Share } from "../../components/Share";

import bannerNPS from "../../assets/img/NPS.webp"
import { Container, Text, Title, SubTitle, TextPromotor, TextDetrator, VerMais } from "./styles"

const Nps = () => {
    return (<>
        <Header />
        <Container>
            <Share/>
            <Title>NPS (Net Promoter Score)</Title>
            <Text>O Net Promoter Score é uma metodologia de satisfação de clientes desenvolvida para avaliar o grau de fidelidade dos clientes de qualquer perfil de empresa.</Text>
            <img src={bannerNPS} alt="" width="480px"/>
            <SubTitle>Como funciona o NPS na prática?</SubTitle>
            <Text>Os desenvolvedores do Net Promoter Score, relacionaram respostas de uma série de perguntas, com dados de recompra, indicações, e outros indicadores positivos que contribuem para o crescimento das empresas, para medir a relação que teriam entre si.<br/><br/>Deste estudo, eles perceberam que uma alta pontuação a uma única pergunta estava diretamente correlacionada com estes indicadores em 11 dos 14 casos. <br/><br/>Em 3 outros casos uma outra pergunta se saiu melhor, mas a diferença era tão pouca, que ambas serviriam como indicador. <br/><br/><span>“Em uma escala de 0 a 10, o quanto você recomendaria a empresa X a um amigo ou colega?”</span> <br/><br/>Esta pergunta permite mensurar rapidamente o sentimento do cliente em relação a empresa, pois não há indicativo maior de satisfação para a empresa do que ser indicada. <br/><br/>Uma vez que o cliente indica uma alta possibilidade de referendá-lo, certamente ele confia na estrutura oferecida pela sua empresa e a maneira como ela entrega o produto ou serviço.</Text>     
            <SubTitle>Como funciona a classificação dos clientes?</SubTitle>
            <Text>Segundo a reposta dada, os clientes são classificados em 3 grupos distintos:</Text>
            <SubTitle>1. Promotores (nota 9 ou 10)</SubTitle>
            <Text>Pessoas que dão esta nota realmente enxergaram o valor no seu produto ou serviço e realmente se sentem melhores por utilizá-los.</Text>
            <Text>Para o cálculo do NPS, desconsidera-se as avaliações passivas. Pega-se então a porcentagem de clientes promotores e subtrai-se deles a porcentagem de clientes detratores.<br/><br/>O resultado é um número que varia de -100 a 100.<br/><br/><TextPromotor>% CLIENTES PROMOTORES</TextPromotor> – <TextDetrator>% CLIENTES DETRATORES</TextDetrator> = NPS</Text>
            <br/>
            <VerMais>Ver mais...</VerMais>
        </Container>
    </>)
}

export { Nps }