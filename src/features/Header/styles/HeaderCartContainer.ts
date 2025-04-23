import styled from 'styled-components';

export const CartItensPanel = styled.div`
  position: relative;
`;

export const CartItensIcon = styled.div`
  width: 100%;
  height: 100%;
  position: none;
  top: 0;
  left: 0;
`;

export const CartItensCount = styled.p`
  position: absolute;

  display: flex;
  justify-content: center;

  font-size: 16px;

  padding: 0.2em 0.5em;

  top: -30%;
  left: 70%;
  color: #fff;
  background-color: lightcoral;
  border-radius: 8px;
  z-index: 10;
`;
