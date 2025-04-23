import styled, { keyframes } from 'styled-components';

type ToastTypeColor = 'success' | 'error' | 'warning' | 'info';

interface PanelProps {
  order: number;
}

interface ContainerProps {
  type: ToastTypeColor;
}

const typeColors = {
  success: '#28a745',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const Panel = styled.div<PanelProps>`
  position: fixed;
  bottom: 32px;
  left: 0;

  width: 100%;

  z-index: ${(props: PanelProps) => 1000 - props.order};

  display: flex;
  justify-content: center;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;

  padding: 16px;
  border-radius: 8px;

  width: 620px;
  max-width: 800px;
  color: #ffffff;
  background-color: ${(props: ContainerProps) => typeColors[props.type]};
  animation:
    ${fadeIn} 0.5s ease-in-out,
    ${fadeOut} 1.5s ease-in-out 3.5s;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

export const CloseButton = styled.div`
  display: flex;
  align-items: center;
`;
