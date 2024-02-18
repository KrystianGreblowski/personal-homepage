import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.colors.font.footerCaption};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 24px;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.font.footerInfo};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  max-width: 670px;
  margin: 0;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;
  margin: 56px 0 92px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 16px;
    margin: 40px 0 16px 0;
  }
`;
