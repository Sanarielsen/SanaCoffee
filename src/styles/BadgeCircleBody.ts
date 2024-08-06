import styled from "styled-components";
import { device } from "./Devices";

export const BadgeCircleBody = styled.div`
  display: flex;
  align-items: center;

  color: #574F4D;

  @media ${device.laptop} { 
    justify-content: center;
  }

  @media ${device.laptopL} { 
    justify-content: left;
  }
`;