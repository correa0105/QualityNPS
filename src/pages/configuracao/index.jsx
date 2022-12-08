import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, Titulo, TituloPagina, ContainerTitulo, FormSpace, InputHTML } from "./styles"

const Configuracao = () => {
    return (<>
        <Header autenticado={true} />
        <ContainerTitulo>
            <Titulo>
                <TituloPagina>Configuração</TituloPagina>
            </Titulo>
        </ContainerTitulo>
        <Container>
            <FormSpace>
                <h2>Padrões de Pesquisa</h2>
                <div className="InputForm">
                    <input type="number" />
                    <label>Reenviar a pesquisa a cada "x" dias.</label>
                </div>
                <div className="InputForm">
                    <input type="text" />
                    <label>Horario de Envio.</label>
                </div>
                <div className="InputForm">
                    <input type="number" />
                    <label>Após quanto tempo o cliente pode receber a avaliação (dias).</label>
                </div>
                <div className="InputForm">
                    <input type="text" />
                    <label>Data de término do envio automatico.</label>
                </div>
                <div className="InputForm">
                    <input type="checkbox" />
                    <label>Permitir respostas anônimas</label>
                </div>
                <div className="InputForm">
                    <input type="number" />
                    <label>Limite maximo de respostas por dispáro.</label>
                </div>
                <div className="InputForm">
                    <div>
                        <input type="checkbox" />
                        <span>Seg</span>
                        <input type="checkbox" />
                        <span>Ter</span>
                        <input type="checkbox" />
                        <span>Qua</span>
                        <input type="checkbox" />
                        <span>Qui</span>
                        <input type="checkbox" />
                        <span>Sex</span>
                    </div>
                    <div>
                        Selecione os dias da semana para envio.
                    </div>
                </div>
                <div className="InputForm">
                    <input type="checkbox" />
                    <label>Enviar email de resposta contabilizada.</label>
                </div>
                <div className="InputForm">
                    <input type="number" />
                    <label>Hook Url para integração.</label>
                </div>
                <h2>Padrões de Usuario</h2>
                <div className="InputForm">
                    <input type="checkbox" />
                    <label>Permitir que o professor receba um email de resposta contabilizada.</label>
                </div>
                <div className="InputForm">
                    <input type="checkbox" />
                    <label>Enviar relatório semanal do status do NPS para o email do professor.</label>
                </div>
                <div className="InputForm">
                    <input type="number" />
                    <label>Quantidade de alunos que receberão a pesquisa (Por professor)</label>
                </div>
                <div className="InputForm">
                    <input type="text" />
                    <label>--------- Opção aqui ---------</label>
                </div>
                <div className="InputForm">
                    <input type="radio" />
                    <label>--------- Opção aqui ---------</label>
                </div>
                <div className="InputForm">
                    <input type="checkbox" />
                    <label>--------- Opção aqui ---------</label>
                </div>

                <h2>Layout do Email (HTML)</h2>
                <InputHTML value="<body> /* Digite aqui seu layout */ </body>" />
                <h2>Estilização do Layout (CSS)</h2>
                <InputHTML value="* {box-sizing: border-box;}" />
            </FormSpace>
            <Button title="Gravar" />
        </Container>
    </>)
}

export { Configuracao }