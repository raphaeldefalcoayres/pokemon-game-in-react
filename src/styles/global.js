import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html, body, #root{
    height:100%;
    position:relative;
    overflow-x:hidden;
  }

  #root{
    display:flex;
    justify-content:center;
    align-items:center;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background:#25262A;
  }

  body, input, button{
    font:1rem Nunito,Arial,Helvetica,sans-serif;
    color:#f2f2f2;
  }

`;

export const ContainerGlobal = styled.div`
  width: 1140px;
  max-width: calc(100% - 30px);
  margin: 0 auto;
`;
