import styled from 'styled-components';

export const CartAddressFormContainer = styled.div`
  width: 100%;
`;

export const CartAddressFieldRow = styled.div`
  display: flex;
  gap: 12px;
  margin: 16px 0;
`;

export const CartAddressFieldGroup = styled.div`
  width: 100%;
`;

export const InputText = styled.input.attrs((props) => ({
  style: props.id === 'txtCep' ? { width: '200px' } : { width: '100%' },
}))`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 100%;
  height: 42px;

  background: #eeeded;
  border: 1px solid #e6e5e5;
  border-radius: 4px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
`;

export const InputTextError = styled.span``;
