import React from "react";

import { Container, Card } from "./styles";

const instituicoes = [
  { id: 1, nome: "Instituição 1" },
  { id: 2, nome: "Instituição 2" },
  { id: 2, nome: "Instituição 3" }
];

const Login = () => {
  return (
    <Container>
      <Card>
        <label>Login</label>
        <select placeholder="Instituição...">
          {instituicoes.map((instituicao) => (
            <option value={instituicao.id}>{instituicao.nome}</option>
          ))}
        </select>
        <input type="text"  placeholder="Login..."/>
        <input type="password"  placeholder="Senha..."/>

        <button>ENTRAR</button>
      </Card>
    </Container>
  );
};

export default Login;
