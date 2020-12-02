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
      <Logo src="https://www.unoesc.edu.br/images/front_end/logo_unoesc.jpg"/>
      <NomeInstituicao>Unoesc</NomeInstituicao>
      <ContainerMenus>
        <Link to="/dashboard/1" style={{ textDecoration: "none" }}>
          <Menu>Home</Menu>
        </Link>
        <ColapsibleMenu>
          <input type="checkbox" id="menu-categoria" />
          <label htmlFor="menu-categoria">Categorias</label>
          <div>
            <ul>
              {categoria.map((categoria) => (
                <li key={categoria.id}>
                  <Link
                    to={`/dashboard/${categoria.id}`}
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
