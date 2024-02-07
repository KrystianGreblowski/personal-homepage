import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 64px 0 20px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 24px 0 20px 0;
  }
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 32px;
    height: 32px;
  }
`;

export const MainInfo = styled.h3`
  color: ${({ theme }) => theme.colors.font.errorMainInfo};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.2px;
  margin: 16px 0 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    letter-spacing: 0.9px;
    margin: 8px 0 16px 0;
  }
`;

export const ExtraInfo = styled.p`
  color: ${({ theme }) => theme.colors.font.errorExtraInfo};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }
`;
