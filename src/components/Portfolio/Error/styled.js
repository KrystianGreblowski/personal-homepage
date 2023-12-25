import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 64px 0 20px 0;
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
`;

export const MainInfo = styled.h3`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.2px;
  margin: 16px 0 32px 0;
`;

export const ExtraInfo = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  margin: 0;
`;
