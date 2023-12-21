import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1216px;
  padding: 32px;
  margin: auto;
  margin-top: 63px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
`;

export const HeaderTitle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
`;

export const TitleText = styled.h2`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  padding-bottom: 15px;
  margin: 0;
`;

export const TitleIcon = styled.div`
  width: 27px;
  height: 32px;
  margin-top: 6px;
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

  ::before {
    content: "•";
    color: ${({ theme }) => theme.color.scienceBlue};
    font-size: 1.5em;
    padding-right: 8px;
  }
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.color.slateGray};
`;
