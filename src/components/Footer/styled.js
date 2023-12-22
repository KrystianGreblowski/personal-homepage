import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 120px;
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  margin: 0;
`;

export const Mail = styled.p`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.6px;
  margin: 24px 0;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  max-width: 670px;
  margin: 0;
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;
  margin: 56px 0 109px 0;
`;
