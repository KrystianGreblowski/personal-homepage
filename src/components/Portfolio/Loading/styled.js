import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 64px 0 20px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
    margin-bottom: 32px;
  }
`;

export const Animation = styled.div`
  width: 160px;
  height: 160px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 64px;
    height: 64px;
  }
`;
