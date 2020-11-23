import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const Lista = styled.div`
  margin: 20px 0 0 50px;
`;

export const Titulo = styled.h1`
  font-size: 45px;
  font-style: bold;
  margin-left: 20px;
`;
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Slide = styled.div`
  height: 250px;
  margin: 20px 20px 0 0;
  background-color: #e8e8e8;
  align-items: center;
  display: flex;
`;

export const Imagem = styled.img`
  margin-left: 25px;
  min-width: 250px;
  height: 200px;
  width: 250px;
`;
export const ContainerSlider = styled.div`
  align-items:initial;
  width: calc(100% - 290px);
  height: 100%;
  display:flex;
  flex-direction:column;
  padding: 25px 20px 20px 20px;
`;
export const Nome = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Descricao = styled.span`
  height: 100%;
  overflow-wrap: break-word;
  margin-top: 5px;
  font-size: 16px;
`;
