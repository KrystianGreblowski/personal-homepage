import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 592px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 56px;
  border-radius: 4px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.scienceBlue};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.2px;
  margin: 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  margin: 24px 0;
`;

export const Links = styled.div`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
`;

export const Demo = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 8px;
`;

export const Code = styled(Demo)`
  margin-bottom: 0;
`;

export const LinkTitle = styled.span`
  margin-right: 8px;

  ${({ $Code }) =>
    $Code &&
    css`
      margin-right: 13px;
    `}
`;

export const DirectLink = styled.a`
  color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration: none;
  border-bottom: 1px solid rgb(3, 102, 214, 0.2);
`;
