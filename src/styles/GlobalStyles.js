import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Lato", sans-serif;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root{
    height: 100vh;
  }

  ul, li {
    list-style: none;
  }

  body {
    background: rgb(51,17,130);
background: linear-gradient(180deg, rgba(51,17,130,1) 0%, rgba(81,26,200,1) 85%, rgba(107,54,232,1) 100%);  }
`;