import styled from 'styled-components';

export const PanelContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MoneyMetric = styled.span`

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  text-align: center;
  line-height: 130%;
  font-optical-sizing: auto;
`;

export const MoneyValue = styled.span`

  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 130%;
  text-align: right;
  font-optical-sizing: auto;
  white-space: nowrap;
`;
