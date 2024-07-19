import styled from "styled-components";
import { device } from "../../../styles/Devices";

export const TitleBanner = styled.h1`
  text-align: center;

  @media ${device.laptopL} {
    text-align: left;
  }
`;