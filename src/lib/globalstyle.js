import { createGlobalStyle } from "styled-components";

const GlobalStyle =  createGlobalStyle`
   html{
    font-family: 'Pretendard';

   }

   body{
    font-family: 'Pretendard';
    font-size : 16px;
    color : #272727;
   }

   a{
      text-decoration : none;
      color : black;
   }

`;

export default GlobalStyle;