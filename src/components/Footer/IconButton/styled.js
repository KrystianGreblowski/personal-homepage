import styled from "styled-components";

export const StyledIcon = styled.button`
  background-color: ${({ theme }) => theme.background.body};
  fill: ${({ theme }) => theme.fill.footerIcon};
  width: 48px;
  height: 48px;
  border: none;
  padding: 0;
  transition: fill 0.1s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 32px;
    height: 32px;
  }

  &:hover {
    cursor: pointer;
    fill: ${({ theme }) => theme.fill.footerIconHover};
  }
`;
