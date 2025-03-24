import { ButtonContainer } from '@globalStyles/ButtonContainer';
import { CartReviewDetails } from './CartReviewDetails';
import { CartReviewListItem } from './CartReviewListItem';
import {
  CartReviewPanel,
  TitleCartReview,
} from '@features/Cart/styles/CartReviewContainer';
import { useCartProducts } from 'src/contexts/CartProductsContext';

export function CartReview() {

  const { getCartItems, putQuantityOfProductOnCart, deleteProductOnCart } = useCartProducts();
  
  const cartItens = getCartItems();
  const totalCart = cartItens && cartItens.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <TitleCartReview>Cafés selecionados</TitleCartReview>

      <CartReviewPanel>
        <CartReviewListItem
          items={cartItens}
          onChangeItem={putQuantityOfProductOnCart}
          onDeleteItem={deleteProductOnCart}
        />
        <CartReviewDetails items={cartItens} />
        <ButtonContainer type="submit" disabled={!totalCart || totalCart <= 0}>
          CONFIRMAR PEDIDO
        </ButtonContainer>
      </CartReviewPanel>
    </>
  );
}
