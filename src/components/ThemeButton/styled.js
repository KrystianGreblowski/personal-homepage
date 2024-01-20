import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 12px;
  align-items: center;
  margin-top: 115px;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      grid-gap: 17px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    justify-items: right;
    margin-top: 32px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.font.themeButtonText};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  margin: 0;
  justify-self: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    ${({ $mobile }) =>
      $mobile &&
      css`
        display: none;
      `}
  }
`;

export const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.background.body};
  width: 48px;
  height: 26px;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;
