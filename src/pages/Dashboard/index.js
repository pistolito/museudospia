import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";

import {
  Container,
  Body,
  Lista,
  TituloCategoria,
  ContainerSlider,
  Nome,
  Descricao,
  ImagemObjeto,
  ContainerDescricao,
} from "./styles";

const objetos = [
  {
    id: 1,
    nome: "Objeto 1",
    descricao:
      "husbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwuk",
  },
  {
    id: 5,
    nome: "Objeto 5",
    descricao:
      "husbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwuk",
  },
  {
    id: 2,
    nome: "Objeto 2",
    descricao:
      "husbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwuk",
  },
  {
    id: 3,
    nome: "Objeto 3",
    descricao:
      "husbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwuk",
  },
  {
    id: 4,
    nome: "Objeto 4",
    descricao:
      "husbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwuk",
  },
];

const categorias = [
  { id: 1, descricao: "Categoria 1" },
  { id: 2, descricao: "Categoria 2" },
  { id: 3, descricao: "Categoria 3" },
];

const Dashboard = () => {
  const [Renderizar, setRenderizar] = useState();

  const mudarRender = (componente, id) => {
    setRenderizar(componente);
  };

  return (
    <Container>
      <Body>
        <TituloCategoria>Categoria</TituloCategoria>
        <Lista>
          {objetos.map((e) => (
            <ContainerSlider key={e.id}>
              <ImagemObjeto></ImagemObjeto>
              <ContainerDescricao>
                <Nome>{e.nome}</Nome>
                <Descricao>{e.descricao}</Descricao>
              </ContainerDescricao>
            </ContainerSlider>
          ))}
        </Lista>
      </Body>
    </Container>
  );
};

export default Dashboard;
