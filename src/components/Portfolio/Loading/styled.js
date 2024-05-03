import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 64px 0 20px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin: 24px 0 20px 0;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.font.loadingText};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  margin: 0;
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
    margin-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    font-size: 12px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
}
  to {
    transform: rotate(360deg);
}
`;

export const LoadingAnimation = styled(Spinner)`
  animation: ${rotate} 1s linear infinite;
  width: 160px;
  height: 160px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 40px;
    height: 40px;
  }
`;
