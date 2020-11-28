import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Body,
  ContainerMenuLateral,
} from "./styles";

const Configuracao = () => {
  return (
    <Container>
      <Body>
        <ContainerMenuLateral>
          <input type="checkbox" id="menu-lateral" />
          <button>
            <label htmlFor="menu-lateral">Cadastro</label>
          </button>
          <div>
            <ul>
              <li>Instituição</li>
              <li>Categoria</li>
              <li>Usuário</li>
              <li>Local</li>
              <li>Objeto</li>
            </ul>
          </div>
        </ContainerMenuLateral>
        
      </Body>
    </Container>
  );
};

export default Configuracao;
