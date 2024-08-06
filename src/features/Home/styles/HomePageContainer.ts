import { device } from '@globalStyles/Devices';
import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 380px;

  @media ${device.laptop} {
    height: 100%;
  }

  @media ${device.laptopL} {
    height: 380px;
    flex-direction: row;
  }
`;

export const HomeContextFirst = styled.div`

  @media ${device.laptop} { 
    width: 100%;
    height: 100%;
  }

  @media ${device.laptopL} {
    width: 50%;
    height: 100%;
  }
`;

export const HomeContextSecond = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${device.laptop} { 
    width: 100%;
    height: 100%;
  }

  @media ${device.laptopL} {
    width: 50%;
    height: 100%;
  }
`;

export const ProductsContainer = styled.div`
  margin-top: 32px;
`;