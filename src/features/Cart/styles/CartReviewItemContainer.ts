import styled from 'styled-components';

export const CartReviewItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 368px;
`;

export const ItemSection = styled.div`
  display: flex;
`;

export const ItemImage = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
`;

export const ItemDescrition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  margin-left: 16px;
  width: 100%;
`;

export const ItemTitle = styled.span`
  font-family: 'Roboto', normal;
  font-size: 16px;
  line-height: 130%;
  color: #403937;
`;

export const ItemActions = styled.div`
  display: flex;
  height: 32px;
  gap: 8px;
`;

export const ItemValue = styled.span`
  font-family: 'Roboto', normal;
  font-size: 16px;
  font-weight: bold;
`;
