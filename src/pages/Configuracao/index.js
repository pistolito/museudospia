import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import Instituicao from "./Intituicao";
import Categoria from "./Categoria";
import Local from "./Local";
import Objeto from "./Objeto";
import Usuario from "./Usuario";

import { Container, Body, ContainerMenuLateral, Corpo } from "./styles";

const Configuracao = () => {
  const [Renderizar, setRenderizar] = useState(<Instituicao />);

  const mudarRender = (pagina, id) => {
    setRenderizar(pagina);
  };

  return (
    <Container>
      <Body>
        <ContainerMenuLateral>
          <input type="checkbox" id="menu-lateral" />
          <button>
            <GiHamburgerMenu />
            <label htmlFor="menu-lateral">Cadastro</label>
          </button>
          <div>
            <ul>
              <li>
                <button onClick={() => mudarRender(<Instituicao />)}>
                  Instituição
                </button>
              </li>
              <li>
                <button onClick={() => mudarRender(<Categoria />)}>
                  Categoria
                </button>
              </li>
              <li>
                <button onClick={() => mudarRender(<Local />)}>Local</button>
              </li>
              <li>
                <button onClick={() => mudarRender(<Objeto />)}>Objeto</button>
              </li>
              <li>
                <button onClick={() => mudarRender(<Usuario />)}>
                  Usuário
                </button>
              </li>
            </ul>
          </div>
        </ContainerMenuLateral>
        <Corpo>{Renderizar}</Corpo>
      </Body>
    </Container>
  );
};

export default Configuracao;
