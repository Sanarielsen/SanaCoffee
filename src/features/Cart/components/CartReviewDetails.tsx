import { useTheme } from 'styled-components';

import { CartItem } from '@globalTypes/CartItem';
import {
  CartReviewDetailsContainer,
  TotalSection,
  ValueSection,
} from '@features/Cart/styles/CartReviewDetailsContainer';

interface CartReviewDetailsProps {
  items: CartItem[] | null;
}

export function CartReviewDetails({ items }: CartReviewDetailsProps) {
  const theme = useTheme();

  const totalValue =
    items &&
    items.reduce((acc, item) => {
      return acc + item.product.value * item.quantity;
    }, 0);

  const deliveryCost = 3.52;

  return (
    <CartReviewDetailsContainer>
      <ValueSection color={theme['text-base']}>
        <span>Total de itens</span>
        <span>R$ {totalValue && totalValue.toFixed(2)}</span>
      </ValueSection>
      <ValueSection color={theme['text-base']}>
        <span>Entrega</span>
        {/* Desenvolver uma função que calcule o frete de acordo com o endereço */}
        <span>R$ {deliveryCost.toFixed(2)}</span>
      </ValueSection>
      <TotalSection color={theme['text-subtitle']}>
        <span>Total</span>
        <span>R$ {totalValue && (totalValue + deliveryCost).toFixed(2)}</span>
      </TotalSection>
    </CartReviewDetailsContainer>
  );
}
