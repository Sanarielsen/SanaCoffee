import {
  CartAddressBody,
  CartAddressHeader,
  CartAddressIcon,
  CartAddressPanel,
  DescriptionAddressHeader,
  TitleAddressHeader,
  TitleCartReview,
} from '@features/Cart/styles/CartAddressContainer';
import { CartAddressForm } from './CartAddressForm';

export function CartAddress() {
  return (
    <CartAddressPanel>
      <TitleCartReview>Complete seu pedido</TitleCartReview>
      <CartAddressBody>
        <CartAddressHeader>
          <CartAddressIcon>
            <img src="/AddressIconOrange.svg" />
          </CartAddressIcon>
          <div>
            <TitleAddressHeader> Endereço de entrega </TitleAddressHeader>
            <DescriptionAddressHeader>
              Informe o endereço onde deseja receber seu pedido
            </DescriptionAddressHeader>
          </div>
        </CartAddressHeader>
        <CartAddressForm />
      </CartAddressBody>
    </CartAddressPanel>
  );
}
