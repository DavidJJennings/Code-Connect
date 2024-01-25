import { createGlobalStyle } from "styled-components";
import TabarraProBlack from "./assets/fonts/TabarraPro-Black-FFP.ttf";
import TabarraProLight from "./assets/fonts/TabarraPro-Light-FFP.ttf";
import TabarraProNarrowLight from "./assets/fonts/TabarraPro-NarrowLight-FFP.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
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
  }

  body {
    font-family: 'TabarraPro-Light', sans-serif;
  }
`;

export default GlobalStyle;
