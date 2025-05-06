import { device } from '@globalStyles/Devices';
import styled from 'styled-components';

export const PaymentOption = styled.div`  
  margin: 16px;

  @media ${device.tablet} {
    display: flex;
    width: 100%;
    background-color: ${({ theme }) => theme['secondary-outlined']};
    border-radius: 6px;
    margin: 0px;
  }
`;

export const PaymentOptionBody = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 16px;
`;

export const PaymentOptionLabel = styled.p`
  color: ${({ theme }) => theme['text-base']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
`;
