import { createGlobalStyle } from "styled-components";
import TabarraProBlack from "./assets/fonts/TabarraPro-Black-FFP.ttf";
import TabarraProLight from "./assets/fonts/TabarraPro-Light-FFP.ttf";
import TabarraProNarrowLight from "./assets/fonts/TabarraPro-NarrowLight-FFP.ttf";
import QuicksandBold from "./assets/fonts/QuicksandBold.ttf";
import QuicksandLight from "./assets/fonts/QuicksandLight.ttf";
import QuicksandMedium from "./assets/fonts/QuicksandMedium.ttf";
import QuicksandRegular from "./assets/fonts/QuicksandRegular.ttf";
import QuicksandSemiBold from "./assets/fonts/QuicksandSemiBold.ttf";

const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'TabarraPro-Black';
    src: url(${TabarraProBlack}) format('truetype');
  }

  @font-face {
    font-family: 'TabarraPro-Light';
    src: url(${TabarraProLight}) format('truetype');
  }

  @font-face {
    font-family: 'TabarraPro-NarrowLight';
    src: url(${TabarraProNarrowLight}) format('truetype');
  } */

  

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

  body {
    font-family: 'QuicksandMedium', sans-serif;
     background-color: rgba(54, 69, 79, 0.1);
     overflow-y: auto;
     overflow-x: hidden;
  
  }
  
  



`;

export default GlobalStyle;
