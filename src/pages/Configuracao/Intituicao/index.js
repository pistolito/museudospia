import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import api from "../../../services/api";

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

const Intituicao = ({ id }) => {
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [end, setEnd] = useState("");
  const dados = [];

  useEffect(() => {
    const listarInstituicao = async () => {
      const response = await api.get("buscarinstituicao", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const { nome, endereco, numero_telefone } = response.data;
      setNome(nome);
      setTel(numero_telefone);
      setEnd(endereco);
    };
    listarInstituicao();
  }, []);
  return (
    <Container>
      <Cadastro>
        <label id="titulo">Instituição</label>
        <Card>
          <Campo>
            <label>Nome: </label>{" "}
            <input
              placeholder="Informe nome da instituição..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Campo>
          <Campo>
            <label>Telefone: </label>{" "}
            <input
              type="number"
              placeholder="Informe telefone da instituição..."
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </Campo>
          <Campo>
            <label>Endereço: </label>{" "}
            <textarea
              placeholder="Informe endereço da instituição..."
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </Campo>
          <button>Salvar</button>
        </Card>
      </Cadastro>
      <Listagem>
        <ContainerGrid>
          <Cabecalho>
            <span>Nome</span>
            <span>Telefone</span>
            <span id="endereco">Endereço</span>
            <span id="acoes">Ações</span>
          </Cabecalho>
          <Grid>
            {dados.map((e) => (
              <div key={e.id} id="row">
                <span id="first">{e.nome}</span>
                <span>{e.telefone}</span>
                <span id="endereco">{e.endereco}</span>
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

export default Intituicao;
