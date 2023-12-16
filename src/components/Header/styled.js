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

export const Button = styled.button`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-size: 21px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.003px;
  margin-top: 32px;
  margin-bottom: 83px;
`;

export const StyledButtonIcon = styled.div`
  width: 25px;
  height: 25px;
`;
