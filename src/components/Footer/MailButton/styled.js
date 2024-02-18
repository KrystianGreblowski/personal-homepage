import styled from "styled-components";

export const Mail = styled.a`
  color: ${({ theme }) => theme.colors.font.footerMailButton};
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.6px;
  text-decoration: none;
  transition: color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    letter-spacing: 0.9px;
    margin: 12px 0;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.font.footerMailButtonHover};
  }
`;
