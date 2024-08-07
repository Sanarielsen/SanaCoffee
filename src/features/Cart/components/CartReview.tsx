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
        {
          //Listagem de produtos
        }
        <CartReviewListItem />
        {
          //Informações gerais do Carrinho
        }
        <button>Confirmar Pedido</button>
      </CartReviewPanel>
    </>
  );
}
