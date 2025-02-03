import { TypeComponent } from '@globalTypes/TypeComponent';
import { styled } from 'styled-components';

interface ButtonContainerProps {
  color: TypeComponent;
}

const backgroudColor = {
  primary: (props: any) => props.theme.primary,
  secondary: (props: any) => props.theme.secondary,
  success: (props: any) => props.theme.success,
  error: (props: any) => props.theme.error,
  warning: (props: any) => props.theme.warning,
  info: (props: any) => props.theme.info,
}

const backgroudColorOnHover = {
  primary: (props: any) => props.theme['primary-hover'],
  secondary: (props: any) => props.theme['secondary-hover'],
  success: (props: any) => props.theme['success-hover'],
  error: (props: any) => props.theme['error-hover'],
  warning: (props: any) => props.theme['warning-hover'],
  info: (props: any) => props.theme['info-hover'],
}

const backgroudColorOnDisabled = {
  primary: (props: any) => props.theme['primary-disabled'],
  secondary: (props: any) => props.theme['secondary-disabled'],
  success: (props: any) => props.theme['success-disabled'],
  error: (props: any) => props.theme['error-disabled'],
  warning: (props: any) => props.theme['warning-disabled'],
  info: (props: any) => props.theme['info-disabled'],
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  margin: 8px;

  width: 100%;
  height: 46px;

  font-family: 'Roboto', normal;
  font-size: 14px;

  background-color: ${(props) => backgroudColor[props.color]};
  color: ${(props) => props.theme.white};

  &:disabled {
    background-color: ${(props) => backgroudColorOnDisabled[props.color]};
  }

  &:not(:disabled):hover {
    background-color: ${(props) => backgroudColorOnHover[props.color]};
  }

  -moz-appearance: textfield; /* Remove default Firefox styling */
  border: none; /* Remove border */
  outline: none; /* Remove outline */
  text-align: center; /* Center the text */
`;
