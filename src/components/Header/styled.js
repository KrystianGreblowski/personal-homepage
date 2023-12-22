import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 66px;
  margin-top: 115px;
  margin-right: 128px;
`;

export const HeaderImage = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  overflow: hidden;
`;

export const HeaderContent = styled.div`
  margin: auto;
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  margin-top: 68px;
  margin-bottom: 0;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 38px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.9px;
  margin-top: 12px;
  margin-bottom: 35px;
`;

export const AboutMe = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  margin-top: 0;
  margin-bottom: 0;
`;
