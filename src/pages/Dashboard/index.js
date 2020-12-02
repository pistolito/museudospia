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
  Ad,
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

  const pesquisar = async (e) => {
    const response = await api.post("objeto/nome", {
      nome: e,
      categoria: id,
    });
    setObjeto(response.data);
  };

  return (
    <Container>
      <Body>
        <TituloCategoria>Categoria</TituloCategoria>

        {localStorage.getItem("token") && (
          <Ad>
            <Link to="/configuracao" style={{ textDecoration: "none" }}>
              <button>Admin</button>
            </Link>
          </Ad>
        )}
        <PesquisaContainer>
          <Pesquisa
            onChange={(event) => pesquisar(event.target.value)}
          ></Pesquisa>
          <BtnPesquisa>
            <FiSearch size={20} />
          </BtnPesquisa>
        </PesquisaContainer>
        <Lista>
          {objeto.map((e) => (
            <ContainerSlider key={e.id}>
              <ContainerDescricao>
                <Nome>{e.nome}</Nome>
                <Descricao>{e.descricao}</Descricao>
                <Local>Se encontra no local: {e.Local.descricao}</Local>
              </ContainerDescricao>
            </ContainerSlider>
          ))}
        </Lista>
      </Body>
    </Container>
  );
};

export default Dashboard;
