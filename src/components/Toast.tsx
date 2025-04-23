import {
  CloseButton,
  Container,
  Message,
  Panel,
} from '@globalStyles/ToastContainer';
import { TypeComponent } from '@globalTypes/TypeComponent';

interface ToastProps {
  order: number;
  type: TypeComponent;
  message: string;
  onCloseToast: () => void;
}

export function Toast({ order, type, message, onCloseToast }: ToastProps) {
  return (
    <Panel order={order}>
      <Container type={type}>
        <Message>
          <p>{message}</p>
        </Message>
        <CloseButton>
          <img src="./CloseIcon.svg" onClick={onCloseToast} />
        </CloseButton>
      </Container>
    </Panel>
  );
}
