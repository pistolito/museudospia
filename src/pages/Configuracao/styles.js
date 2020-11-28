import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 70px);
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

export const Body = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  background-color: white;
`;

export const ContainerMenuLateral = styled.div`
  label {
    display: flex;
    width: 250px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
    padding-left: 15px;
  }
  input#menu-lateral {
    display: none;
  }
  input:checked ~ div {
    max-height: 100%;
    border: 1px solid #e6e6e6;
  }
  div {
    width: 250px;
    max-height: 0;
    overflow: hidden;
    position: absolute;
    ul: {
      list-style-type: none;
      padding: 0;
    }
    li {
      width: 100%;
      height: 50px;
      display: flex;
      font-size: 16px;
      border-bottom: 1px solid #e6e6e6;
      padding: 0 0 0 15px;
      align-items: center;
    }
  }
`;

