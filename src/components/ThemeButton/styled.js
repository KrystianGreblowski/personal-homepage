import styled, { css } from "styled-components";
import { ReactComponent as Sun } from "../../images/sun.svg";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 12px;
  align-items: center;
  margin-top: 38px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-gap: 10px;
    margin-top: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    grid-template-columns: 1fr;
    justify-items: right;
    margin-top: 16px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.font.themeButtonText};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  margin: 0;
  justify-self: right;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 11px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    display: none;
  }
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border.themeButton};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.background.themeButton};
  width: 48px;
  height: 26px;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ToggleCircle = styled.div`
  background-color: ${({ theme }) => theme.colors.background.toggleCircle};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-left: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.6s;

  ${({ $darkTheme }) =>
    $darkTheme &&
    css`
      transform: translateX(22px);
    `}
`;

export const ToggleIcon = styled(Sun)`
  fill: ${({ theme }) => theme.colors.fill.toggleIcon};
  width: 14px;
  height: 14px;
`;
