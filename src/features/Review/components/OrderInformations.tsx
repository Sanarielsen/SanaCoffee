import { BadgeDescription } from '@globalComponents/BadgeDescription';
import {
  DeliveryImageSection,
  MainContainer,
  OrderSection,
  TopicOrder,
} from '@features/Review/styles/OrderInformationsContainer';
import { ColorVariant } from '@globalTypes/ColorVariant';
import { CartPersonAddress } from '@globalTypes/CartAddress';

interface OrderInformationsProps {
  address: CartPersonAddress
}

export function OrderInformations( {address}: OrderInformationsProps ) {

  const description = address.city + ', ' + address.state;

  return (
    <MainContainer>
      <OrderSection>
        <TopicOrder>
          <BadgeDescription
            icon="/IconPin.svg"
            color={ColorVariant.PURPLE}
            label={
              <>
                Entrega em <strong>{address.street},{address.number}</strong>
              </>
            }
            description={description}
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
                <strong>{address.paymentMethod}</strong>
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
