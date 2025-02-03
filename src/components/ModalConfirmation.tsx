import { ButtonContainer } from "@globalStyles/ButtonContainer";
import { Panel, Container, Header, TitleSection, CloseSection, Body, Footer } from "@globalStyles/ModalConfirmationContainer";
import { TypeComponent } from "@globalTypes/TypeComponent";

interface ModalConfirmationProps {
  open: boolean;
  type: TypeComponent;
  title: string;
  message: string;
  onClose: () => void;
  onSubmit: () => void;
}

const CancelButton = {
  'warning': TypeComponent.SECONDARY,
  'info': TypeComponent.ERROR,

  //Opcional
  'success': TypeComponent.PRIMARY,  
  'error': TypeComponent.PRIMARY,
  'primary': TypeComponent.PRIMARY,
  'secondary': TypeComponent.PRIMARY,
}

const PositiveButton = {
  'warning': TypeComponent.ERROR,
  'info': TypeComponent.SUCCESS,

  //Opcional
  'success': TypeComponent.PRIMARY,  
  'error': TypeComponent.PRIMARY,
  'primary': TypeComponent.PRIMARY,
  'secondary': TypeComponent.PRIMARY,
}

export function ModalConfirmation({open, type, title, message, onClose, onSubmit}: ModalConfirmationProps) {
  return (
    open && (
      <Panel>
        <Container>
          <Header>
            <TitleSection>
              <h4>{title}</h4>
            </TitleSection>
            <CloseSection>            
              <img src="./CloseIconBlack.svg" onClick={onClose} />
            </CloseSection>
          </Header>
          <Body>
            <p>{message}</p>  
          </Body>
          <Footer>            
            <ButtonContainer color={CancelButton[type]} type="button" onClick={onClose}>Não</ButtonContainer>
            <ButtonContainer color={PositiveButton[type]} type="button" onClick={onSubmit}>Sim</ButtonContainer>                                     
          </Footer>        
        </Container>      
      </Panel>
    )
  )
}