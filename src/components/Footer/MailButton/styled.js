import styled from "styled-components";

export const Mail = styled.button`
  color: ${({ theme }) => theme.color.mineShaft};
  background-color: ${({ theme }) => theme.color.whiteLilac};
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.6px;
  margin: 24px 0;
  border: none;
  padding: 0;
  transition: color 0.1s ease;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.scienceBlue};
  }
`;
