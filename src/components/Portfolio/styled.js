import styled, { css } from "styled-components";

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

export const Header = styled.div`
  text-align: center;
`;

export const StyledGitHubIcon = styled.div`
  display: inline-block;
  fill: ${({ theme }) => theme.colors.fill.portfolioIcon};
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 32px;
    height: 32px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.font.portfolioTitle};
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  margin-top: 12px;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 18px;
    letter-spacing: 0.9px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.font.portfolioDescription};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  margin-top: 8px;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 18px;
    margin-top: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 17px;
    letter-spacing: 0.85px;
  }
`;

export const Body = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    grid-gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-top: 16px;
    grid-gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    grid-gap: 8px;
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    grid-gap: 4px;
  }

  ${({ $loading, $error }) =>
    ($loading || $error) &&
    css`
      grid-template-columns: 1fr;
    `}
`;
