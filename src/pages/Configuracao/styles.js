import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
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
  height: 100%;
  background-color: white;
`;

export const Corpo = styled.div`
  display: flex;
	flex-direction: column;
  height: calc(100vh - 120px);
`;

export const ContainerMenuLateral = styled.div`
  button {
    border: none;
    padding-left: 15px;
    font-size: 20px;
    align-items: center;
    display: flex;
    label {
      display: flex;
      width: 130px;
      height: 50px;
      font-weight: bold;
      align-items: center;
      margin-left: 10px;
    }
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
      align-items: center;
      button {
        width: 100%;
        height: 100%;
        border: none;
        background-color: white;
        border-bottom: 1px solid #e6e6e6;
      }
    }
  }
`;
