import {
  CartReviewDetailsContainer,
  TotalSection,
  ValueSection,
} from "@features/Cart/styles/CartReviewDetailsContainer";
import { useTheme } from "styled-components";

export function CartReviewDetails() {
  const theme = useTheme();

  return (
    <CartReviewDetailsContainer>
      <ValueSection color={theme["text-base"]}>
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </ValueSection>
      <ValueSection color={theme["text-base"]}>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </ValueSection>
      <TotalSection color={theme["text-subtitle"]}>
        <span>Total</span>
        <span>R$ 33,20</span>
      </TotalSection>
    </CartReviewDetailsContainer>
  );
}
