import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-top: -16px;
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-top: -26px;
    grid-gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const HeaderImage = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 320px;
    height: 320px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 128px;
    height: 128px;
  }
`;

export const HeaderContent = styled.div`
  margin: auto;
  margin-right: 128px;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    margin-right: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-right: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    margin-right: 0;
  }
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.colors.font.headerCaption};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 11px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 10px;
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.font.headerName};
  font-size: 38px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.9px;
  margin-top: 12px;
  margin-bottom: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 30px;
    margin-top: 4px;
    margin-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 22px;
    margin-top: 8px;
    letter-spacing: 1.1px;
    margin-bottom: 12px;
  }
`;

export const AboutMe = styled.p`
  color: ${({ theme }) => theme.colors.font.headerAboutMe};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 16px;
    letter-spacing: 0.85px;
  }
`;
