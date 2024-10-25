import styled from 'styled-components';

interface CartReviewDetailsContainerProps {
  color: string;
}

export const CartReviewDetailsContainer = styled.div`
  padding-bottom: 24px;
`;

export const ValueSection = styled.div<CartReviewDetailsContainerProps>`
  display: flex;
  justify-content: space-between;

  padding-bottom: 12px;

  font-family: 'Roboto', normal;
  font-size: 14px;

  color: ${(props) => props.color};
`;

export const TotalSection = styled.span<CartReviewDetailsContainerProps>`
  display: flex;
  justify-content: space-between;

  font-family: 'Roboto', normal;
  font-size: 20px;
  font-weight: bold;

  color: ${(props) => props.color};
`;
