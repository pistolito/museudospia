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
  return (
    <Container>
      <Cadastro>
        <label id="titulo">Local</label>
        <Card>
          <Campo>
            <label>Descrição: </label>{" "}
            <input placeholder="Informe uma descrição..." />
          </Campo>
          <Campo>
            <label>Complemento: </label>{" "}
            <textarea placeholder="Informe um complemento..." />
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
                  <FaEdit color="#d4bf00" />
                  <RiDeleteBinFill color="#ff4545" />
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
