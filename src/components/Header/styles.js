import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  background-color: #4daff9;
  align-items: center;
`;

export const Logo = styled.img`
  width: 50px;
  min-width: 50px;
  height: 50px;
  margin-left: 30px;
`;

export const NomeInstituicao = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

export const Login = styled.button`
  width: 50px;
  background-color: #a6a6a6;
  height: 25px;
  right: 30px;
  margin-right: 20px;
  font-size: 12px;
`;

export const ContainerMenus = styled.div`
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 80px;
  display: flex;
  margin-left: 30px;
`;

export const Menu = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100px;
  height: 50px;
  :hover {
    cursor: pointer;
    border: 1px solid;
  }
`;

export const ColapsibleMenu = styled.div`
  align-items: center;
  width: 100px;
  height: 50px;

  ul: {
    list-style-type: none;
    padding: 0;
  }

  input#menu-categoria {
    display: none;
  }

  input:checked ~ div {
    max-height: 100%;
  }

  label {
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    :hover {
      cursor: pointer;
      border: 1px solid;
    }
  }

  li {
    margin-top: 10px;
  }

  div {
    max-height: 0;
    overflow: hidden;
    position: absolute;
    margin-top: 10px;
    width: 200px;
    background-color: #fff;
  }

  a {
    margin-left: 15px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ContainerPesquisa = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 400px;
  right: 20px;
`;

export const Pesquisa = styled.input`
  width: 200px;
  height: 30px;
  background-color: #e6e6e6;
  margin: 0 15px 0 15px;
`;

export const BtnPesquisa = styled.div`
  :hover {
    cursor: pointer;
    border: 1px solid;
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
`;
