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

interface CartReviewProps {

  onUpdateCart: (cartItens: CartItem[]) => void;
}

export function CartReview({ onUpdateCart }: CartReviewProps) {
  const [cartItens, setCartItens] = useState<CartItem[]>(cartItensMocked);

  const totalCart = cartItens.reduce((acc, item) => acc + item.quantity, 0);

  const handleChangeQuantity = (id: number, newQuantity: number) => {
    setCartItens((prevCartItens) => {
      const updatedCart = prevCartItens.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      );
      onUpdateCart(updatedCart);
      return updatedCart;
    });
  };

  const handleDeleteItem = (id: number) => {
    setCartItens((prevCartItens) => {
      const updatedCart = prevCartItens.filter((item) => item.id !== id);
      onUpdateCart(updatedCart);
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
