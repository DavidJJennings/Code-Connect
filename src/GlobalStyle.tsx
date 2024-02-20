import { createGlobalStyle } from "styled-components";

import QuicksandBold from "./assets/fonts/QuicksandBold.ttf";
import QuicksandLight from "./assets/fonts/QuicksandLight.ttf";
import QuicksandMedium from "./assets/fonts/QuicksandMedium.ttf";
import QuicksandRegular from "./assets/fonts/QuicksandRegular.ttf";
import QuicksandSemiBold from "./assets/fonts/QuicksandSemiBold.ttf";

const GlobalStyle = createGlobalStyle`

    @font-face {
    font-family: 'QuicksandBold';
    src: url(${QuicksandBold}) format('truetype');
  }

   @font-face {
    font-family: 'QuicksandLight';
    src: url(${QuicksandLight}) format('truetype');
  }

   @font-face {
    font-family: 'QuicksandMedium';
    src: url(${QuicksandMedium}) format('truetype');
  }

   @font-face {
    font-family: 'QuicksandRegular';
    src: url(${QuicksandRegular}) format('truetype');
  }

  @font-face {
    font-family: 'QuicksandSemiBold';
    src: url(${QuicksandSemiBold}) format('truetype');
  }

  :root {
    font-family: 'QuicksandMedium', sans-serif;
     background-color: rgba(54, 69, 79, 0.1);
     overflow-y: auto;
     overflow-x: hidden;
  
  }
  
  button{
   font-family: 'QuicksandMedium', sans-serif;
  }



`;

export default GlobalStyle;
