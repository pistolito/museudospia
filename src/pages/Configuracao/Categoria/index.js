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

const Categoria = ({ id }) => {
  return (
    <Container>
      <Cadastro>
        <label id="titulo">Categorias</label>
        <Card>
          <Campo>
            <label>Nome: </label>{" "}
            <input placeholder="Informe o nome da categoria..." />
          </Campo>
          <button>Salvar</button>
        </Card>
      </Cadastro>
      <Listagem>
        <ContainerGrid>
          <Cabecalho>
            <span id="first">Código</span>
            <span>Nome</span>
            <span id="acoes">Ações</span>
          </Cabecalho>
          <Grid>
            {[].map((e) => (
              <div key={e.id} id="row">
                <span id="first">{e.id}</span>
                <span>{e.nome}</span>
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

export default Categoria;
