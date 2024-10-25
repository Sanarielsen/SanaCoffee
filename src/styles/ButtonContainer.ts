import { styled } from 'styled-components';

export const ButtonContainer = styled.button`
  margin: 8px;

  width: 100%;
  height: 46px;

  font-family: 'Roboto', normal;
  font-size: 14px;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  &:disabled {
    background-color: ${(props) => props.theme['primary-disabled']};
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['primary-hover']};
  }

  -moz-appearance: textfield; /* Remove default Firefox styling */
  border: none; /* Remove border */
  outline: none; /* Remove outline */
  text-align: center; /* Center the text */
`;
