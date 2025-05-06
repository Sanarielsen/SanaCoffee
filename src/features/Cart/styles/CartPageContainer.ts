import { device } from '@globalStyles/Devices';
import styled from 'styled-components';

export const CartPagePanel = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 16px;
`;

export const CartPageDetails = styled.div`
  grid-column: span 3;

  @media ${device.laptopL} {
    grid-column: 1 / span 2;
  }
`;

export const CartPageProducts = styled.div`
  grid-column: span 3;

  @media ${device.laptopL} {
    grid-column: 3;
  }
`;
