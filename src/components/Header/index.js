import React from "react";

import {
  Header,
  LogoUnoesc,
  TituloHeader,
  PesquisaContainer,
  LoginContainer,
} from "./styles";

import logoUnoesc from "../../assets/unoescLogo.jpg";

const Dashboard = () => {
  return (
      <Header>
      <LogoUnoesc src={logoUnoesc} />
        <TituloHeader>MUSEU UNOESC</TituloHeader>

        <PesquisaContainer />
        <LoginContainer>Login</LoginContainer>
      </Header>
  );
};

export default Dashboard;
