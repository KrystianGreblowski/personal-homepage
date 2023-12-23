import styled from "styled-components";

export const StyledIcon = styled.button`
  width: 48px;
  height: 48px;
  fill: ${({ theme }) => theme.color.mineShaft};
  transition: fill 0.1s ease;

  &:hover {
    cursor: pointer;
    fill: ${({ theme }) => theme.color.scienceBlue};
  }
`;
