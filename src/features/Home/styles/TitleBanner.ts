import { device } from '@globalStyles/Devices';
import styled from "styled-components";

export const TitleBanner = styled.h1`
  text-align: center;

  @media ${device.laptopL} {
    text-align: left;
  }
`;