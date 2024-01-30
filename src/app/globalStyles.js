import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
      html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
      background-color: ${({ theme }) => theme.background.body};
      font-family: 'Inter', sans-serif;
      word-break: break-word;
      max-width: 1248px;
      margin: auto;
      padding: 16px;
      padding-top: 0;
  }
`;
