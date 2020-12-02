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

const Objeto = () => {
  const [local, setLocal] = useState([]);
  const [cat, setCategoria] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [all, setAll] = useState([]);

  useEffect(() => {
    const localad = async () => {
      const responseLocal = await api.get("local");
      setLocal(responseLocal.data);

      const responseCategoria = await api.get("categoria");
      setCategoria(responseCategoria.data);

      const all = await api.get("all", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setAll(all.data);
    };

    localad();
  }, []);

  const salvar = async () => {
    await api.post(
      "objeto",
      {
        nome,
        descricao,
        codigo_categoria: document.getElementById("selectCat").value,
        codigo_local: document.getElementById("selectLoc").value,
        status: document.getElementById("selectSt").value,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    const all = await api.get("all", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    setAll(all.data);
  };

  return (
    <Container>
      <Cadastro>
        <label id="titulo">Objetos</label>
        <Card>
          <Campo>
            <label>Nome: </label>{" "}
            <input
              placeholder="Informe nome..."
              onChange={(e) => setNome(e.target.value)}
            />
          </Campo>
          <Campo>
            <label>Descrição: </label>
            <input
              placeholder="Informe descricação..."
              onChange={(e) => setDescricao(e.target.value)}
            />
          </Campo>
          <Campo>
            <div>
              <label>Categoria: </label>
              <select id="selectCat">
                {cat.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.nome}
                  </option>
                ))}
              </select>
              <label>Local: </label>
              <select id="selectLoc">
                {local.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.descricao}
                  </option>
                ))}
              </select>
              <label>Status: </label>
              <select id="selectSt">
                <option value={1}>Disponível</option>
                <option value={2}>Manutenção</option>
              </select>
            </div>
          </Campo>
          <Campo>
            <input type="file" id="avatar" accept="image/*" />
          </Campo>
          <button onClick={() => salvar()}>Salvar</button>
        </Card>
      </Cadastro>
      <Listagem>
        <ContainerGrid>
          <Cabecalho>
            <span id="first">nome</span>
            <span id="login">descrição</span>
            <span id="papel">categoria</span>
            <span id="papel">local</span>
            <span id="papel">status</span>
            <span id="acoes">Ações</span>
          </Cabecalho>
          <Grid>
            {all.map((e) => (
              <div key={e.id} id="row">
                <span id="first">{e.nome}</span>
                <span id="login">{e.descrição}</span>
                <span id="papel">História</span>
                <span id="papel">
                  {e.categoria === 1 ? "Bloco D" : "Bloco C"}
                </span>
                <span id="papel">{e.local === 1 ? "História" : "Ciência"}</span>
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

export default Objeto;
