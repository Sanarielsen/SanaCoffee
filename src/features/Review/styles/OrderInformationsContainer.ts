import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2;
  gap: 102px;
  padding-top: 40px;
`;

export const OrderSection = styled.div`
  grid-column: 1;
  padding: 8px 0 40px 40px;
  color: #FFF;
  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme.primary}; /* Change the border color here */
`;

export const TopicOrder = styled.div`
  padding-top: 32px;
`;

export const DeliveryImageSection = styled.div`
  grid-column: 2;
`;

