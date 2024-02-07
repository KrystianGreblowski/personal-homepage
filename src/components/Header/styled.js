import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 66px;
  margin-top: -26px;
  margin-right: 128px;
  margin-bottom: -12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: auto;
    grid-gap: 12px;
    margin-right: 0;
    margin-bottom: -2px;
  }
`;

export const HeaderImage = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 132px;
    height: 132px;
  }
`;

export const HeaderContent = styled.div`
  margin: auto;
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.colors.font.headerCaption};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  margin-top: 68px;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 0;
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.font.headerName};
  font-size: 38px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.9px;
  margin-top: 12px;
  margin-bottom: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
    letter-spacing: 1.1px;
    margin-top: 8px;
    margin-bottom: 12px;
  }
`;

export const AboutMe = styled.p`
  color: ${({ theme }) => theme.colors.font.headerAboutMe};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  margin-top: 0;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
    letter-spacing: 0.85px;
  }
`;
