import { DeliveryImageSection, MainContainer, OrderSection, TopicOrder } from "../styles/OrderInformationsContainer";

export function OrderInformations() {
  return (
    <MainContainer>
      <OrderSection>
        <TopicOrder> Topico 1 </TopicOrder>
        <TopicOrder> Topico 2 </TopicOrder>
        <TopicOrder> Topico 3 </TopicOrder>
      </OrderSection>
      <DeliveryImageSection>
        Imagem 1
      </DeliveryImageSection>
    </MainContainer>
  );
}