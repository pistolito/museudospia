import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
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
  Local,
  Pesquisa,
  BtnPesquisa,
  PesquisaContainer,
} from "./styles";

const Dashboard = () => {
  const [objeto, setObjeto] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const adquirirCategoria = async () => {
      const response = await api.get(`objeto/categoria/${id}`);
      setObjeto(response.data);
    };
    adquirirCategoria();
  }, [id]);

  const pesquisar = () => {
    
  }
  return (
    <Container>
      <Body>
        <TituloCategoria>Categoria</TituloCategoria>
        <PesquisaContainer>
          <Pesquisa></Pesquisa>
          <BtnPesquisa>
            <FiSearch size={20} />
          </BtnPesquisa>
        </PesquisaContainer>
        <Lista>
          {objeto.map((e) => (
            <ContainerSlider key={e.id}>
              <ImagemObjeto src={e.Arquivos[0].url}></ImagemObjeto>
              <ContainerDescricao>
                <Nome>{e.nome}</Nome>
                <Descricao>{e.descricao}</Descricao>
              </ContainerDescricao>
              <Local>Se encontra no local: {e.Local.descricao}</Local>
            </ContainerSlider>
          ))}
        </Lista>
      </Body>
    </Container>
  );
};

export default Dashboard;
