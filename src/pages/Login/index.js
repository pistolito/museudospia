import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { Container, Card } from "./styles";

const Login = ({ history }) => {
  const [instituicao, setInstituicao] = useState([]);
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();

  useEffect(() => {
    const adquirirInstituicao = async () => {
      const response = await api.get("instituicao");
      setInstituicao(response.data);
    };

    adquirirInstituicao();
  }, []);

  const enviar = async () => {
    const response = await api.post("sessions", {
      codigo_instituicao: document.getElementById("selectIn").value,
      login,
      senha,
    });

    if (response.data.token) {
      localStorage.setItem("token", "Bearer " + response.data.token);
      history.push("/configuracao");
    }
  };

  return (
    <Container>
      <Card>
        <label>Login</label>
        <select id="selectIn" placeholder="Instituição...">
          {instituicao.map((instituicao) => (
            <option key={instituicao.id} value={instituicao.id}>
              {instituicao.nome}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          placeholder="Login..."
        />
        <input
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          placeholder="Senha..."
        />

        <button onClick={() => enviar()}>ENTRAR</button>
      </Card>
    </Container>
  );
};

export default Login;
