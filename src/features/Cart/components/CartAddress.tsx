import {
  CartAddressBody,
  CartAddressForm,
  CartAddressHeader,
  CartAddressPanel,
  TitleCartReview,
} from '../styles/CartAddressContainer';

export function CartAddress() {
  return (
    <CartAddressPanel>
      <TitleCartReview>Complete seu pedido</TitleCartReview>
      <CartAddressBody>
        <CartAddressHeader>
          <p> Endereço de entrega </p>
          <p> Informe o endereço onde deseja receber seu pedido </p>
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
