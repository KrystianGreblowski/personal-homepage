import styled from "styled-components";

export const Button = styled.button`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  background-color: ${({ theme }) => theme.background.mailButton};
  margin-top: 32px;
  margin-bottom: 83px;
  transition: box-shadow 0.1s ease;

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
`;

export const ButtonText = styled.div`
  color: ${({ theme }) => theme.font.headerButtonText};
  text-align: center;
  font-size: 21px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.003px;
`;
