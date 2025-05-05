import {
  CartAddressPanel,
  TitleCartReview,
} from '@features/Cart/styles/CartAddressContainer';
import { CartAddressForm } from './CartAddressForm';
import {
  CartBody,
  CartPanelHeader,
  CartPanelIcon,
  DescriptionPanelHeader,
  TitlePanelHeader,
} from '@features/Cart/styles/CartPanelContainer';

export function CartAddress() {
  return (
    <CartAddressPanel>
      <TitleCartReview>Complete seu pedido</TitleCartReview>
      <CartBody>
        <CartPanelHeader>
          <CartPanelIcon>
            <img src={`${import.meta.env.BASE_URL}./AddressIconOrange.svg`} />            
          </CartPanelIcon>
          <div>
            <TitlePanelHeader> Endereço de entrega </TitlePanelHeader>
            <DescriptionPanelHeader>
              Informe o endereço onde deseja receber seu pedido
            </DescriptionPanelHeader>
          </div>
        </CartPanelHeader>
        <CartAddressForm />
      </CartBody>
    </CartAddressPanel>
  );
}
