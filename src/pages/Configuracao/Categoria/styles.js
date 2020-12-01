import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Cadastro = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 15px 15px 15px 15px;
  label#titulo {
    width: 500px;
    font-size: 30px;
    text-align: center;
  }
`;

export const Card = styled.div`
  padding: 10px 30px 10px 10px;
  margin: 15px 15px 15px 15px;
  height: auto;
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  button {
    margin: 20px 0 0 110px;
    width: 300px;
    height: 30px;
    background-color: green;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
`;

export const Campo = styled.div`
  width: 100%;
  font-size: 18px;
  margin: 10px;
  display: flex;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  label {
    width: 100px;
    font-size: 18px;
  }
  input {
    width: calc(100% - 100px);
    height: 30px;
    border: 1px solid #e6e6ee;
    border-radius: 5px;
  }
  textarea {
    width: calc(100% - 100px);
    height: 70px;
    border: 1px solid #e6e6ee;
    border-radius: 5px;
    resize: none;
  }
`;

export const Listagem = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: fit-content;
`;
export const ContainerGrid = styled.div`
  width: 100%;
  font-size: 17px;
  margin: 15px;
  border-radius: 5px;
  padding: none;
  height: fit-content;
  border: 1px solid #e6e6e6;
`;
export const Cabecalho = styled.div`
  height: 30px;
  background-color: #e6e6e6;
  display: flex;
  align-items: center;
  padding-left: 10px;
  span {
    min-width: 50px;
    flex: 1;
  }
  span#acoes {
    width: 100px;
    max-width: 100px;
  }
  span#endereco {
    flex: 2;
  }
  span#first {
      max-width: 80px;
    }
`;
export const Grid = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  max-height: 380px;
  flex-direction: column;

  div#row {
    display: flex;
    align-items: center;
    border: 1px solid #e6e6e6;
    span {
      display: flex;
      padding-left: 10px;
      align-items: center;
      border-right: 1px solid #e6e6e6;
      border-left: 1px solid #e6e6e6;
      min-width: 50px;
      flex: 1;
      height: 30px;
    }
    span#first {
      border-left: none;
      max-width: 80px;
    }
    span#acoes {
      width: 100px;
      max-width: 100px;
      align-items:center;
      justify-content: space-around;
    }

    span#endereco {
      flex: 2;
    }
  }
`;
