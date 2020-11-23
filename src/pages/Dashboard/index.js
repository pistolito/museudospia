import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import CategoriaComponent from "../Categoria";

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
  const [Renderizar, setRenderizar] = useState();



  const mudarRender = (componente, id) => {
    setRenderizar(componente);
  };

  return (
    <Container>
    </Container>
  );
};

export default Dashboard;
