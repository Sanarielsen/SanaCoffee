import styled from 'styled-components'

export const ModalConfirmationPanel = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);
  color: #FFF;

  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};

  z-index: 100;
`;

export const Modal = styled.div`
  min-width: 500px;
  max-width: 800px;

  background-color: #FFF;
  color: #000;
  
  border-radius: 8px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ccc;  
`;

export const ModalBody = styled.div`
  padding: 16px;
  border-bottom: 1px solid #ccc;  
`;

export const ModalFooter = styled.div`

  padding: 16px;

  display: flex;
  gap: 8px;

  > button {
    flex: 1;
  }

  &.single > button {
    width: 100%;
  }
`;

export const TitleText = styled.h3` 
  font-size: 18px;
  margin: 0;

  flex: auto;
  min-width: 0;
  max-width: calc(100% - 40px); /* Leaves space for X */  

  text-align: center;
  word-break: break-word;
`;

export const ButtonClose = styled.button`
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
  white-space: nowrap; /* prevents "X" from wrapping */
  margin-left: 8px;

  &:hover {
    color: ${({theme}) => theme['primary-color-danger']}
  }
`;

export const DescriptionText = styled.p`

  font-size: 16px;
  margin: 0;
  padding: 16px;
  
  text-align: center;
  word-break: break-word;
`;

export const ButtonSuccess = styled.button`

  all: unset;

  width: 100%;
  text-align: center;

  padding: 8px;

  border-radius: 4px;

  background-color: ${({theme}) => theme['primary-color-success']};
  color: ${({theme}) => theme.white};

  &:hover {
    background-color: ${({theme}) => theme['primary-color-success-hover']}
  }
`;

export const ButtonFailed = styled.button`

  all: unset;

  width: 100%;
  text-align: center;

  padding: 8px;

  border-radius: 4px;

  background-color: ${({theme}) => theme['primary-color-danger']};
  color: ${({theme}) => theme.white};

  &:hover {
    background-color: ${({theme}) => theme['primary-color-danger-hover']}
  }
`;