import React from "react";

import { FiSearch } from "react-icons/fi";

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
              {categorias.map((categoria) => (
                <li key={categoria.id}>
                  <a>{categoria.descricao}</a>
                </li>
              ))}
            </ul>
          </div>
        </ColapsibleMenu>
        <Menu>Sobre</Menu>
        <ContainerPesquisa>
          <Pesquisa></Pesquisa>
          <BtnPesquisa>
            <FiSearch size={20} />
          </BtnPesquisa>
        </ContainerPesquisa>
      </ContainerMenus>
      <Login>Login</Login>
    </Container>
  );
};

export default Header;
