import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 16px;
    line-height: 1.65;
    color: #171717;
  }

  body {
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Inter', sans-serif;
    line-height: 1.5em;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }
`;

export default GlobalStyle;
