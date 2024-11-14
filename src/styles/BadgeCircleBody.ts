import styled from 'styled-components';
import { device } from './Devices';

export const BadgeCircleBody = styled.div`
  display: flex;
  align-items: center;

  color: #574f4d;

  @media ${device.laptop} {
    justify-content: center;
  }

  @media ${device.laptopL} {
    justify-content: left;
  }
`;

export const BadgeText = styled.div`
  display: flex;
  flex-direction: column;
`;
