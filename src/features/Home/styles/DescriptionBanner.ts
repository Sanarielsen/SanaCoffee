import { device } from '@globalStyles/Devices';
import styled from 'styled-components';

export const DescriptionBanner = styled.p`

  font-size: 20px;
  color: #403937;

  text-align: center;

  @media ${device.laptopL} {
    text-align: left;
  }
`;