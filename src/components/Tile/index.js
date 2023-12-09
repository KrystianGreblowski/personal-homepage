import styled from "styled-components";

export const Tile = styled.div`
  width: 1216px;
  padding: 50px;
  margin: auto;
  margin-top: 73px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
`;
