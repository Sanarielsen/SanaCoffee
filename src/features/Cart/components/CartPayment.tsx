import {
  CartBody,
  CartPanelHeader,
  CartPanelIcon,
  DescriptionPanelHeader,
  TitlePanelHeader,
} from '@features/Cart/styles/CartPanelContainer';

export function CartPayment() {
  return (
    <CartBody>
      <CartPanelHeader>
        <CartPanelIcon>
          <img src="/PaymentIconPurple.svg" />
        </CartPanelIcon>
        <div>
          <TitlePanelHeader> Pagamento </TitlePanelHeader>
          <DescriptionPanelHeader>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </DescriptionPanelHeader>
        </div>
      </CartPanelHeader>
    </CartBody>
  );
}
