import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    scroll-behavior: smooth;
    transition: background 0.3s, color 0.3s;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  a {
    text-decoration: none;
  }

  canvas {
    border-radius: 16px;
  }
`;

export default GlobalStyles;
