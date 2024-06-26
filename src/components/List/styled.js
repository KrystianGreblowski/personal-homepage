import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 32px;
  margin: auto;
  margin-top: 64px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background.listWrapper};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-top: 48px;
    padding: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-top: 32px;
    padding: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    margin-top: 24px;
  }
`;

export const HeaderTitle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.listHeaderTitle};
  align-items: baseline;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-gap: 6px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.font.listTitleText};
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  margin: 0;
  margin-bottom: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 26px;
    margin-bottom: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-bottom: 12px;
    font-size: 18px;
    letter-spacing: 0.9px;
  }
`;

export const Icon = styled.div`
  width: 27px;
  margin-top: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 22px;
    margin-top: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 15px;
  }
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 16px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  padding: 0;
  margin: 0;
  margin-top: 32px;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-top: 24px;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-top: 12px;
    grid-template-columns: repeat(2, 1fr);
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    grid-template-columns: 1fr;
  }

  ::before {
    content: "•";
    color: ${({ theme }) => theme.colors.font.listBullet};
    font-size: 1.5em;
    margin-right: 8px;
  }
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.font.listItem};
`;
