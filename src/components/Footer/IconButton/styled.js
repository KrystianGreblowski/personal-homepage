import styled from "styled-components";

export const StyledIcon = styled.div`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.fill.footerIcon};
  transition: fill 0.1s ease;

  &:hover {
    cursor: pointer;
    fill: ${({ theme }) => theme.fill.footerIconHover};
  }
`;
