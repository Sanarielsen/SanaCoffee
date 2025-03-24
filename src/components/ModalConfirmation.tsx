import { 
  ButtonClose,
  ButtonFailed,
  ButtonSuccess,
  DescriptionText,
  Modal,
  ModalBody,
  ModalConfirmationPanel,
  ModalFooter,
  ModalHeader,
  TitleText
} from "@features/Cart/styles/ModalConfirmationContainer";

interface ModalConfirmationProps {

  open: boolean;
  title: string;
  message: string;
  onClickConfirm: () => void;
  onClickClose: () => void;
}

export function ModalConfirmation({open, title, message, onClickConfirm, onClickClose}: ModalConfirmationProps ) {
  return (    
    <ModalConfirmationPanel open={open}>
      <Modal>
        <ModalHeader>
          <TitleText>{title}</TitleText>
          <ButtonClose type="button" className="btnCloseModal" onClick={onClickClose}>X</ButtonClose>                              
        </ModalHeader>
        <ModalBody>
          <DescriptionText>{message}</DescriptionText>
        </ModalBody>
        <ModalFooter>
          <ButtonFailed type="button" onClick={onClickClose}>Não</ButtonFailed>
          <ButtonSuccess type="button" onClick={onClickConfirm}>Sim</ButtonSuccess>
        </ModalFooter>
      </Modal>
    </ModalConfirmationPanel>   
  )
}