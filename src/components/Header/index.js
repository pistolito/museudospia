import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import api from "../../services/api";

import {
  Container,
  Logo,
  NomeInstituicao,
  Login,
  Menu,
  ContainerMenus,
  Pesquisa,
  ContainerPesquisa,
  BtnPesquisa,
  ColapsibleMenu,
} from "./styles";

const categorias = [
  { id: 1, descricao: "Categoria 1" },
  { id: 2, descricao: "Categoria 2" },
  { id: 3, descricao: "Categoria 3" },
];

const Header = () => {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    const adquirirCategoria = async () => {
      const response = await api.get("categoria");
      setCategoria(response.data);
    };
    adquirirCategoria();
  }, []);
  return (
    <Container>
      <Logo />
      <NomeInstituicao>Unoesc</NomeInstituicao>
      <ContainerMenus>
        <Menu>Home</Menu>
        <ColapsibleMenu>
          <input type="checkbox" id="menu-categoria" />
          <label htmlFor="menu-categoria">Categorias</label>
          <div>
            <ul>
              {categoria.map((categoria) => (
                <li key={categoria.id}>
                  <Link
                    to={`/${categoria.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <a>{categoria.nome}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </ColapsibleMenu>

        <Menu>Sobre</Menu>
        <ContainerPesquisa></ContainerPesquisa>
      </ContainerMenus>

      <Link to="/login" style={{ textDecoration: "none" }}>
        <Login>Login</Login>
      </Link>
    </Container>
  );
};

export default Header;
