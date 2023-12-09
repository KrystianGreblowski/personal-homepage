import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
      html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
      background-color: ${({ theme }) => theme.color.whiteLilac};
      font-family: 'Inter', sans-serif;
  }
`;
