import { device } from '@globalStyles/Devices';
import styled from 'styled-components';

export const PanelProducts = styled.div`
  display: grid;
  justify-items: center;

  padding: 56px 16px;

  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media ${device.mobileS} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
