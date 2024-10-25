import { useState } from 'react';

import { CartReviewDetails } from './CartReviewDetails';
import { CartReviewListItem } from './CartReviewListItem';
import { CartItem } from '@features/Cart/types/CartItem';
import { cartItensMocked } from '@features/Cart/utils/CartItensMocked';
import {
  CartReviewPanel,
  TitleCartReview,
} from '@features/Cart/styles/CartReviewContainer';
import { ButtonContainer } from '@globalStyles/ButtonContainer';

export function CartReview() {
  const [cartItens, setCartItens] = useState<CartItem[]>(cartItensMocked);

  const totalCart = cartItens.reduce((acc, item) => acc + item.quantity, 0);
  console.log('Total do carrinho: ', totalCart);

  const handleChangeQuantity = (id: number, newQuantity: number) => {
    setCartItens((prevCartItens) => {
      const updatedCart = prevCartItens.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      );
      return updatedCart;
    });
  };

  const handleDeleteItem = (id: number) => {
    setCartItens((prevCartItens) => {
      const updatedCart = prevCartItens.filter((item) => item.id !== id);
      return updatedCart;
    });
  };

  return (
    <>
      <TitleCartReview>Cafés selecionados</TitleCartReview>

      <CartReviewPanel>
        <CartReviewListItem
          items={cartItens}
          onChangeItem={handleChangeQuantity}
          onDeleteItem={handleDeleteItem}
        />
        <CartReviewDetails items={cartItens} />
        <ButtonContainer type="submit" disabled={totalCart <= 0}>
          CONFIRMAR PEDIDO
        </ButtonContainer>
      </CartReviewPanel>
    </>
  );
}
