import styled from "styled-components";

export const Button = styled.a`
  color: ${({ theme }) => theme.colors.font.errorButton};
  background-color: ${({ theme }) => theme.colors.background.errorButton};
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid var(--semi-grey, rgba(209, 213, 218, 0.1));
  text-decoration: none;
  font-size: 20.058px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.003px;
  margin-top: 32px;
  transition: box-shadow 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 18px;
    letter-spacing: 0.9px;
    margin-top: 24px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: -2px -2px 0px 0px #8cc2ff, 2px 2px 0px 0px #8cc2ff,
      -2px 2px 0px 0px #8cc2ff, 2px -2px 0px 0px #8cc2ff;
  }

  &:active {
    box-shadow: 0px 2px 0px 0px rgba(20, 70, 32, 0.2) inset;
  }
`;
