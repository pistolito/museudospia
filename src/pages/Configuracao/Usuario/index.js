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

const Usuario = ({ id }) => {
  const dados = [
    { id: 1, nome: "teste 1", login: "teste 1", papel: 1 },
    { id: 2, nome: "teste 2", login: "login 2", papel: 2 },
    { id: 3, nome: "teste 1", login: "teste 1", papel: 1 },
    { id: 4, nome: "teste 2", login: "login 2", papel: 2 },
    { id: 5, nome: "teste 1", login: "teste 1", papel: 1 },
    { id: 6, nome: "teste 2", login: "login 2", papel: 2 },
    { id: 7, nome: "teste 1", login: "teste 1", papel: 1 },
    { id: 8, nome: "teste 2", login: "login 2", papel: 2 },
    { id: 9, nome: "teste 1", login: "teste 1", papel: 1 },
    { id: 10, nome: "teste 2", login: "login 2", papel: 2 },
  ];
  return (
    <Container>
      <Cadastro>
        <label id="titulo">Usuários</label>
        <Card>
          <Campo>
            <label>Nome: </label> <input placeholder="Informe nome..." />
          </Campo>
          <Campo>
            <div id="login">
              <label>Login: </label> <input placeholder="Informe login..." />
              <label id="papel">Papel: </label>
              <select>
                <option value="1">Funcionário</option>
                <option value="2">Administrador</option>
              </select>
            </div>
          </Campo>
          <Campo>
            <div id="senha">
              <label>Senha: </label>
              <input type="password" placeholder="Informe uma senha..." />
            </div>
            <div id="confirma">
              <label>Confirmar Senha: </label>
              <input type="password" placeholder="Confirme a senha..." />
            </div>
          </Campo>
          <button>Salvar</button>
        </Card>
      </Cadastro>
      <Listagem>
        <ContainerGrid>
          <Cabecalho>
            <span id="first">nome</span>
            <span id="login">Login</span>
            <span id="papel">Papel</span>
            <span id="acoes">Ações</span>
          </Cabecalho>
          <Grid>
            {dados.map((e) => (
              <div key={e.id} id="row">
                <span id="first">{e.nome}</span>
                <span id="login">{e.login}</span>
                <span id="papel">{e.papel === 1 ? "Funcionário" : "Administrador"}</span>
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

export default Usuario;
