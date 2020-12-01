import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

import {
  Container,
  Cadastro,
  Listagem,
  Card,
  Campo,
  ContainerGrid,
  Cabecalho,
  Grid,
} from "./styles";

const Local = ({ id }) => {
  const dados = [
    { id: 1, nome: "teste 1", endereco: "endereco 1", telefone: 888888888 },
    { id: 2, nome: "teste 2", endereco: "endereco 2", telefone: 888888888 },
    { id: 3, nome: "teste 3", endereco: "endereco 3", telefone: 888888888 },
    { id: 4, nome: "teste 4", endereco: "endereco 4", telefone: 888888888 },
    { id: 5, nome: "teste 5", endereco: "endereco 5", telefone: 888888888 },
    { id: 6, nome: "teste 6", endereco: "endereco 6", telefone: 888888888 },
    { id: 7, nome: "teste 7", endereco: "endereco 7", telefone: 888888888 },
    { id: 8, nome: "teste 8", endereco: "endereco 8", telefone: 888888888 },
    { id: 9, nome: "teste 9", endereco: "endereco 9", telefone: 888888888 },
    { id: 10, nome: "teste 10", endereco: "endereco 10", telefone: 888888888 },
    { id: 11, nome: "teste 11", endereco: "endereco 11", telefone: 888888888 },
    { id: 12, nome: "teste 12", endereco: "endereco 12", telefone: 888888888 },
    { id: 13, nome: "teste 13", endereco: "endereco 13", telefone: 888888888 },
    { id: 14, nome: "teste 14", endereco: "endereco 14", telefone: 888888888 },
    { id: 15, nome: "teste 15", endereco: "endereco 15", telefone: 888888888 },
    { id: 16, nome: "teste 16", endereco: "endereco 16", telefone: 888888888 },
    { id: 17, nome: "teste 17", endereco: "endereco 17", telefone: 888888888 },
    { id: 18, nome: "teste 18", endereco: "endereco 18", telefone: 888888888 },
    { id: 19, nome: "teste 19", endereco: "endereco 19", telefone: 888888888 },
    { id: 20, nome: "teste 10", endereco: "endereco 10", telefone: 888888888 },
    { id: 21, nome: "teste 11", endereco: "endereco 11", telefone: 888888888 },
    { id: 22, nome: "teste 12", endereco: "endereco 12", telefone: 888888888 },
    { id: 23, nome: "teste 13", endereco: "endereco 13", telefone: 888888888 },
    { id: 24, nome: "teste 14", endereco: "endereco 14", telefone: 888888888 },
    { id: 25, nome: "teste 15", endereco: "endereco 15", telefone: 888888888 },
    { id: 26, nome: "teste 16", endereco: "endereco 16", telefone: 888888888 },
    { id: 27, nome: "teste 17", endereco: "endereco 17", telefone: 888888888 },
    { id: 28, nome: "teste 18", endereco: "endereco 18", telefone: 888888888 },
    { id: 29, nome: "teste 19", endereco: "endereco 19", telefone: 888888888 },
  ];
  return (
    <Container>
      <Cadastro>
        <label id="titulo">Local</label>
        <Card>
          <Campo>
            <label>Descrição: </label> <input placeholder="Informe uma descrição..." />
          </Campo>
          <Campo>
            <label>Complemento: </label> <textarea placeholder="Informe um complemento..."/>
          </Campo>
          <button>Salvar</button>
        </Card>
      </Cadastro>
      <Listagem>
        <ContainerGrid>
          <Cabecalho>
            <span>Descrição</span>
            <span id="complemento">Complemento</span>
            <span id="acoes">Ações</span>
          </Cabecalho>
          <Grid>
            {dados.map((e) => (
              <div key={e.id} id="row">
                <span id="first">{e.nome}</span>
                <span id="complemento">{e.telefone}</span>
                <span id="acoes">
                <FaEdit color="#d4bf00"/><RiDeleteBinFill color="#ff4545"/>
                </span>
              </div>
            ))}
          </Grid>
        </ContainerGrid>
      </Listagem>
    </Container>
  );
};

export default Local;
