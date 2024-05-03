import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-top: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-top: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    margin-top: 24px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 11px;
    margin-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    font-size: 9px;
    margin-bottom: 12px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 16px;
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    font-size: 12px;
    margin-top: 12px;
  }
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;
  margin: 48px 0 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin: 32px 0 16px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-gap: 16px;
    margin: 24px 0 16px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    margin: 16px 0 8px 0;
  }
`;
