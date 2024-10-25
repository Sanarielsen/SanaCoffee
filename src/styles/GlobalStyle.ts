import { createGlobalStyle } from 'styled-components';
import { device } from './Devices';

export const GlobalStyle = createGlobalStyle`

  * {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {

    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body {
    @media ${device.laptop} {
      padding: 0 120px;
    }
    @media ${device.laptopL} {
      padding: 0 240px;
    }
    padding: 0 60px;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif; 
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    line-height: 130%;
  }

  body, input, textarea, button {

    font-family: 'Roboto', normal;
    font-weight: 400;
    font-size: 20px;
    font-stretch: 100;
    line-height: 130%;
  }
`;
