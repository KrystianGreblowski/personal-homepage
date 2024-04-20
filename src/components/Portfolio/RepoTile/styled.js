import styled from "styled-components";

export const TileButton = styled.button`
  max-width: 592px;
  background-color: ${({ theme }) => theme.colors.background.repoTile};
  padding: 56px;
  border-radius: 4px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
  text-align: left;
  transition: border 0.4s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding: 24px;
  }

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.border.repoTile};
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.font.repoTitle};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.2px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 16px;
    letter-spacing: 0.8px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.font.repoDescription};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
    margin: 16px 0;
  }
`;

export const Links = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }
`;

export const Demo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  margin-bottom: 8px;
`;

export const Code = styled(Demo)`
  grid-gap: 13px;
  margin-bottom: 0;
`;

export const LinkTitle = styled.span`
  color: ${({ theme }) => theme.colors.font.linkTitle};
`;

export const DirectLink = styled.a`
  color: ${({ theme }) => theme.colors.font.directLink};
  text-decoration: none;
  border-bottom: 1px solid rgb(3, 102, 214, 0.2);
  transition: border-bottom 0.2s ease;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.directLink};
    cursor: pointer;
  }
`;
