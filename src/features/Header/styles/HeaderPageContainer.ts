import styled from 'styled-components';
import { device } from '@globalStyles/Devices'; // Assuming you have a `device` object for media queries

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Two equal columns by default */

  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr; /* One column on mobile */
    height: 120px;
  }
`;

export const HeaderGroupBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 32px;
  padding-bottom: 16px;

  @media ${device.mobileL} {
    display: grid;
    grid-template-columns: 1fr 1fr; /* One column on mobile */
    justify-content: space-between;

    padding-top: 0;
    padding-bottom: 0;

    height: 120px;
  }
`;

export const HeaderGroupFeatures = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// export const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   height: 120px;  
// `;

// export const HeaderGroupBrand = styled.div`
//   display: flex;
// `;

// export const HeaderGroup = styled.div`
//   display: flex;
// `;