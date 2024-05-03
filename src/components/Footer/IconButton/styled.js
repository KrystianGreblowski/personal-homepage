import styled from "styled-components";

export const StyledIcon = styled.a`
  fill: ${({ theme }) => theme.colors.fill.footerIcon};
  width: 48px;
  height: 48px;
  transition: fill 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    width: 24px;
    height: 24px;
  }

  &:hover {
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.fill.footerIconHover};
  }
`;
