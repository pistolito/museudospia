import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const TituloCategoria = styled.div`
  padding: 20px 20px 0 20px;
  font-size: 30px;
  text-align: center;
`;

export const Lista = styled.div`
  margin-bottom: 30px;
`;

export const ContainerSlider = styled.div`
  height: 200px;
  background-color: #e6e6e6;
  display: flex;
  margin: 20px;
  align-items: center;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerDescricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: initial;
  height: 100%;
  width: calc(100% - 290px);
  padding: 25px;
`;

export const Nome = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Descricao = styled.span`
  height: 100%;
  word-wrap: break-word;
  word-break: normal;
`;

export const ImagemObjeto = styled.img`
  width: 250px;
  min-width: 250px;
  height: 150px;
  margin-left: 30px;
`;
