import { createGlobalStyle } from "styled-components";

const GlobalStyle =  createGlobalStyle`
   
   body{
    font-family: 'Pretendard';
    font-size : 16px;
    color : #272727;
    overflow-x:hidden;
    font-weight: 500;
   }

   a{
      text-decoration : none;
      color : black;
   }

   button{
      font-family: 'Pretendard';
   }

`;

export default GlobalStyle;