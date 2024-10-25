import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import styled from 'styled-components';

interface InputTextErrorProps {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const Label = styled.label`
  color: red;
  font-size: 12px;
`;

export function InputTextError({ error }: InputTextErrorProps) {
  return (
    <>{error && error.message && <Label>{error.message.toString()}</Label>}</>
  );
}
