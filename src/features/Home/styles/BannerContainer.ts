import { device } from '@globalStyles/Devices';
import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 380px;

  @media ${device.laptopL} {
    flex-direction: row;
  }
`;