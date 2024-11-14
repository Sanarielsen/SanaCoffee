import { BadgeDescription } from '@globalComponents/BadgeDescription';
import {
  DeliveryImageSection,
  MainContainer,
  OrderSection,
  TopicOrder,
} from '../styles/OrderInformationsContainer';
import { ColorVariant } from '@globalTypes/ColorVariant';

export function OrderInformations() {
  return (
    <MainContainer>
      <OrderSection>
        <TopicOrder>
          <BadgeDescription
            icon="/IconPin.svg"
            color={ColorVariant.PURPLE}
            label={
              <>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </>
            }
            description="Farrapos - Porto Alegre, RS"
          />
        </TopicOrder>
        <TopicOrder>
          <BadgeDescription
            icon="/IconClock.svg"
            color={ColorVariant.YELLOW}
            label={'Previsão de entrega'}
            description={
              <>
                <strong>20min - 30min</strong>
              </>
            }
          />
        </TopicOrder>
        <TopicOrder>
          <BadgeDescription
            icon="/IconMoney.svg"
            color={ColorVariant.ORANGE}
            label="Pagamento na entrega"
            description={
              <>
                <strong> Cartão de Crédito </strong>
              </>
            }
          />
        </TopicOrder>
      </OrderSection>
      <DeliveryImageSection>
        <img src="/DeliverImage.png" />
      </DeliveryImageSection>
    </MainContainer>
  );
}
