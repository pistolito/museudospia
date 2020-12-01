import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  background-color: #e2f6ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  border-radius: 7px;
  width: 300px;
  background-color: white;

  label {
    font-size: 25px;
    font-weight: bold;
  }
  input {
    width: 200px;
    border-radius: 5px;
    height: 30px;
    margin-top: 10px;
    border: 1px solid #e6e6e6;
  }

  select {
    width: 200px;
    border-radius: 5px;
    height: 30px;
    margin-top: 15px;
    border: 1px solid #e6e6e6; 
  }

  button {
    margin-top: 30px;
    width: 150px;
    height: 30px;
    border-radius: 5px;
    background-color: green;
    font-weight: bold;
    color: white;
    border: none;
  }
`;
