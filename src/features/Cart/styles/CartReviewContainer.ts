import styled from 'styled-components';

import { device } from '@globalStyles/Devices';

export const CartReviewPanel = styled.div`
  margin-top: 15px;
  padding: 40px;
  width: auto;
  background-color: #f3f2f2;
  border-radius: 6px 44px 6px 44px;

  @media ${device.laptopL} {    
    width: 448px;
  }
`;

export const TitleCartReview = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-size: 20px;
  font-weight: 800;
  font-style: bold;
  line-height: 130%;
  font-optical-sizing: auto;
`;
