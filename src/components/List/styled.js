import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 32px;
  margin: auto;
  margin-top: 72px;
  background-color: ${({ theme }) => theme.background.listWrapper};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 16px;
    margin-top: 50px;
  }
`;

export const HeaderTitle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.border.listHeaderTitle};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-gap: 12px;
    align-items: baseline;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.font.listTitleText};
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  padding-bottom: 18px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-bottom: 12px;
    font-size: 18px;
    letter-spacing: 0.9px;
  }
`;

export const Icon = styled.div`
  width: 27px;
  height: 32px;
  margin-top: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 18px;
    height: 21px;
  }
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px 115px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  padding: 32px 0 0 0;
  margin: 0;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 12px 0 0 0;
    grid-template-columns: 1fr;
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }

  ::before {
    content: "•";
    color: ${({ theme }) => theme.font.listBullet};
    font-size: 1.5em;
    padding-right: 8px;
  }
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.font.listItem};
`;
