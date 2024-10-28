import {
  CartAddressBody,
  CartAddressForm,
  CartAddressHeader,
  CartAddressIcon,
  CartAddressPanel,
  DescriptionAddressHeader,
  TitleAddressHeader,
  TitleCartReview,
} from '../styles/CartAddressContainer';

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
              {' '}
              Informe o endereço onde deseja receber seu pedido{' '}
            </DescriptionAddressHeader>
          </div>
        </CartAddressHeader>
        <CartAddressForm>
          <span> Field 1 </span>
          <span> Field 2 </span>
          <span> Field 3 </span>
          <span> Field 4 </span>
          <span> Field 5 </span>
          <span> Field 6 </span>
        </CartAddressForm>
      </CartAddressBody>
    </CartAddressPanel>
  );
}
