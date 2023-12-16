import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const HeaderImage = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 38px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.9px;
`;

export const AboutMe = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
`;
