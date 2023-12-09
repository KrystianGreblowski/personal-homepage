import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1216px;
  padding: 32px;
  margin: auto;
  margin-top: 63px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
`;

export const HeaderTitle = styled.div`
  display: grid;
  grid-template-columns: 329px 27px;
  grid-gap: 16px;
`;

export const TitleText = styled.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
  padding-bottom: 15px;
  margin: 0;
`;

export const TitleIcon = styled.div`
  width: 27px;
  height: 32px;
  margin-top: 6px;
`;
