import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import CategoriaComponent from "../Categoria";
import HomeComponent from "../Home";


import {
  Container,
  Content,
  Categoria,
  PesquisaCategoria,
  CategoriaItem,
  IconeSearch,
  RenderComponente,
  ComponentContainer
} from "./styles";

const Dashboard = () => {
  const [Renderizar, setRenderizar] = useState(HomeComponent);

  const categorias = [
    { id: 1, descricao: "Ciencias" },
    { id: 2, descricao: "Ciencias" },
    { id: 3, descricao: "Ciencias" },
    { id: 4, descricao: "Ciencias" },
    { id: 5, descricao: "Ciencias" },
  ];

  const mudarRender = (componente, id) => {
    setRenderizar(componente);
  };

  return (
    <Container>
      <Content>
        <Categoria>
          <PesquisaCategoria>
            Categoria
            <IconeSearch>
              <FiSearch size={20} />
            </IconeSearch>
          </PesquisaCategoria>

          {categorias.map((e) => (
            <CategoriaItem
              onClick={() => mudarRender(<CategoriaComponent id={e.id} />)}
              key={e.id}
            >
              {e.descricao}
            </CategoriaItem>
          ))}
        </Categoria>
        <RenderComponente><ComponentContainer>{Renderizar}</ComponentContainer></RenderComponente>
      </Content>
    </Container>
  );
};

export default Dashboard;
