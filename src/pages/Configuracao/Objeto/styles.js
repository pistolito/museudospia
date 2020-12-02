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
    margin: 20px 0 0 90px;
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
  justify-content: space-between;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  label {
    width: 80px;
    font-size: 18px;
  }
  input {
    width: calc(95% - 80px);
    height: 30px;
    border: 1px solid #e6e6ee;
    border-radius: 5px;
  }
  select {
    width: 200px;
    height: 30px;
    border: 1px solid #e6e6ee;
    border-radius: 5px;
    margin-left: 10px;
  }
  textarea {
    width: calc(100% - 100px);
    height: 70px;
    border: 1px solid #e6e6ee;
    border-radius: 5px;
    resize: none;
  }
  div#login {
    display: flex;
    align-items: center;
    flex: 1;
    input {
      flex: 1;
      height: 30px;
      border: 1px solid #e6e6ee;
      border-radius: 5px;
    }
    label {
      width: 80px;
      font-size: 18px;
    }
    label#papel {
      margin-left: 20px;
    }
  }
  div#senha {
    display: flex;
    align-items: center;
    flex: 1;
    input {
      width: calc(100% - 80px);
      height: 30px;
      border: 1px solid #e6e6ee;
      border-radius: 5px;
    }
    label {
      width: 80px;
      font-size: 18px;
    }
  }
  div#confirma {
    display: flex;
    align-items: center;
    flex: 1;
    input {
      width: calc(100% - 80px);
      height: 30px;
      border: 1px solid #e6e6ee;
      border-radius: 5px;
    }
    label {
      margin-left: 20px;
      width: 200px;
      font-size: 18px;
    }
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
  min-height: 200px;
  border: 1px solid #e6e6e6;
`;
export const Cabecalho = styled.div`
  height: 30px;
  background-color: #e6e6e6;
  display: flex;
  align-items: center;

  span {
    padding-left: 10px;
    min-width: 50px;
    flex: 1;
  }
  span#acoes {
    width: 100px;
    max-width: 100px;
  }
  span#complemento {
    flex: 3;
  }
  span#papel {
    border-left: none;
    max-width: 130px;
  }
  span#login {
    border-left: none;
    max-width: 400px;
  }
`;
export const Grid = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  max-height: 400px;
  flex-direction: column;

  div#row {
    display: flex;
    align-items: center;

    border: 1px solid #e6e6e6;
    span {
      padding-left: 10px;
      display: flex;
      align-items: center;
      border-right: 1px solid #e6e6e6;
      border-left: 1px solid #e6e6e6;
      min-width: 50px;
      flex: 1;
      height: 30px;
    }
    span#first {
      border-left: none;
    }
    span#papel {
      border-left: none;
      max-width: 130px;
    }
    span#login {
      border-left: none;
      max-width: 400px;
    }
    span#acoes {
      padding: 0;
      width: 100px;
      max-width: 100px;
      align-items: center;
      justify-content: space-around;
    }

    span#complemento {
      flex: 3;
    }
  }
`;
