import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Categoria = styled.div`
  flex-direction: column;
  width: 15%;
  background: #8694a8;
  height: 80%;
  padding: 20px 5px 0 5px;
  border-bottom-right-radius: 20px;
`;

export const PesquisaCategoria = styled.button`
  border-radius: 5px;
  background: white;
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const CategoriaItem = styled.button`
  border-radius: 5px;
  background: white;
  width: 100%;
  margin-top: 15px;
  height: 40px;
`;

export const IconeSearch = styled.div`
  margin-left: 10px;
  position: relative;
  float: right;
`;

export const RenderComponente = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 30px 0 30px;
`;

export const ComponentContainer = styled.div`
  width: 100%;
`;
