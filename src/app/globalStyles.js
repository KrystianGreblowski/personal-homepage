import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
      transition: background-color 0.3s;
      background-color: ${({ theme }) => theme.colors.background.body};
      font-family: 'Inter', sans-serif;
      word-break: break-word;
      overflow-y: scroll;
      max-width: 1248px;
      margin: auto;
      padding: 0 16px;
  }
`;
