import styled from 'styled-components'

export const CartReviewEmptyContainer = styled.p`
  padding: 32px;
  text-align: center;
`;

export const TextDescription = styled.p`
  font-family: 'Roboto', normal;
  font-size: 16px;
  line-height: 130%;
  
  color: #403937;
`;

export const TextLinkContainer = styled.p`
  padding: 8px 0;
`;

export const TextLink = styled.a`
  font-family: 'Roboto', normal;
  font-size: 16px;
  line-height: 130%;

  color: ${(props) => props.theme['secondary']};
  
  &:hover {
    color: ${(props) => props.theme['secondary-hover']};
  }
`;
