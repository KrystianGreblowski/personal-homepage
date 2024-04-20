import styled from "styled-components";

export const Button = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 168px;
  grid-gap: 12px;
  padding: 12px 16px;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  background-color: ${({ theme }) => theme.colors.background.mailButton};
  margin-top: 32px;
  transition: box-shadow 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    max-width: 118px;
    margin-top: 16px;
    padding: 6px 10px;
    grid-gap: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    max-width: 102px;
    margin-top: 12px;
    grid-gap: 4px;
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

export const StyledButtonIcon = styled.div`
  width: 25px;
  height: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 16px;
    height: 16px;
  }
`;

export const ButtonText = styled.div`
  color: ${({ theme }) => theme.colors.font.headerButtonText};
  text-align: center;
  font-size: 21px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.003px;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 16px;
    letter-spacing: 0.9px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 14px;
    letter-spacing: 0.9px;
  }
`;
