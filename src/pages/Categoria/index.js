import React from "react";

import {
  Container,
  Imagem,
  Titulo,
  Lista,
  Grid,
  Slide,
  ContainerSlider,
  Nome,
  Descricao,
} from "./styles";

const objetos = [
  {
    id: 1,
    nome: "Objeto 1",
    descricao:
      "husbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwuk",
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
  {
    id: 5,
    nome: "Objeto 5",
    descricao:
      "husbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwukhusbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwuk",
  },
];

const Categoria = ({ id }) => {
  return (
    <Container>
      <Lista>
        <Titulo>Categoria</Titulo>
        <Grid>
          {objetos.map((e) => (
            <Slide onClick={() => {}} key={e.id}>
              <Imagem />
              <ContainerSlider>
                <Nome>{e.nome}</Nome>
                <Descricao>{e.descricao}</Descricao>
              </ContainerSlider>
            </Slide>
          ))}
        </Grid>
      </Lista>
    </Container>
  );
};

export default Categoria;
