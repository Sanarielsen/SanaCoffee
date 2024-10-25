import styled from 'styled-components';

export const CartPagePanel = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 32px;
  padding: 16px;
`;

export const CartPageAddress = styled.div`
  grid-column: span 2;
  grid-row: 1;

  height: 372px;

  border-radius: 6px;

  background-color: #f3f2f2;
`;

export const CartPagePayment = styled.div`
  grid-column: span 2;
  grid-row: 2;

  height: 372px;

  border-radius: 6px;

  background-color: #f3f2f2;
`;

export const CartPageProducts = styled.div`
  grid-column: 3;
  grid-row: span 2;
`;
