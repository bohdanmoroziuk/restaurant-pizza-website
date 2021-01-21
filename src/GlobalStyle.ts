import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }
`;

export default GlobalStyle;
