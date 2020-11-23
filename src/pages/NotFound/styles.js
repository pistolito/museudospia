import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-image: url("${(props) => props.back}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 10px 0 0 10px;
`;
export const Back = styled.h1`
  color: #000;
  margin-left: 10px;
`;
export const Alinhamento = styled.span`
  display: flex;
  align-items: center;
`;
