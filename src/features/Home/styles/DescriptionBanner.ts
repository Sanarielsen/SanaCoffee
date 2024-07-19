import styled from 'styled-components';
import { device } from '../../../styles/Devices';

export const DescriptionBanner = styled.p`

  font-size: 20px;
  color: #403937;

  text-align: center;

  @media ${device.laptopL} {
    text-align: left;
  }
`;