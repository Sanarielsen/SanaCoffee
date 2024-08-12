import { ButtonContainer } from "@globalStyles/ButtonContainer";
import { CartReviewDetails } from "./CartReviewDetails";
import { CartReviewListItem } from "./CartReviewListItem";
import {
  CartReviewPanel,
  TitleCartReview,
} from "@features/Cart/styles/CartReviewContainer";

export function CartReview() {
  return (
    <>
      <TitleCartReview>Cafés selecionados</TitleCartReview>

      <CartReviewPanel>
        <CartReviewListItem />
        <CartReviewDetails />
        <ButtonContainer>CONFIRMAR PEDIDO</ButtonContainer>
      </CartReviewPanel>
    </>
  );
}
