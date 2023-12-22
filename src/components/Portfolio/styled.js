import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 72px;
`;

export const Header = styled.div`
  text-align: center;
`;

export const StyledGitHubIcon = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  margin-top: 12px;
  margin-bottom: 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  margin-top: 8px;
  margin-bottom: 0;
`;

export const Body = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
`;
