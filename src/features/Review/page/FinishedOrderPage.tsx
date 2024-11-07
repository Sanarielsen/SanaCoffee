import { DescriptionHeader, MainContainer, TitleHeader } from "@features/Review/styles/FinishedOrderPageContainer";
import { OrderInformations } from "../components/OrderInformations";

export function FinishedOrderPage() {

  return (
    <MainContainer>
      <TitleHeader>Uhu! Pedido confirmado</TitleHeader>
      <DescriptionHeader>Agora é só aguardar que logo o café chegará até você</DescriptionHeader>

      <OrderInformations />
    </MainContainer>
  );
}