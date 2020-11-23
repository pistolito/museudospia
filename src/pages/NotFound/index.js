import React from "react";

import { Link } from "react-router-dom";
import BackgroundImg from "../../assets/not.gif";

import { Container } from "./styles";
import { Back } from "./styles";
import { Alinhamento } from "./styles";
import { BiArrowBack } from "react-icons/bi";

const NotFound = () => {
  return (
    <Container back={BackgroundImg}>
      <Link to="/"><Alinhamento>
        <BiArrowBack color="#000" size={40}></BiArrowBack>
        <Back>VOLTAR PARA O INÍCIO</Back>
        </Alinhamento>
      </Link>
    </Container>
  );
};

export default NotFound;
