import { useState } from 'react';

import { CartReviewDetails } from './CartReviewDetails';
import { CartReviewListItem } from './CartReviewListItem';
import { CartItem } from '@globalTypes/CartItem';
import {
  CartReviewPanel,
  TitleCartReview,
} from '@features/Cart/styles/CartReviewContainer';
import { ButtonContainer } from '@globalStyles/ButtonContainer';
import { useCartProducts } from 'src/contexts/CartProductsContext';

interface CartReviewProps {
  onUpdateCart: (cartItens: CartItem[]) => void;
}

export function CartReview({ onUpdateCart }: CartReviewProps) {
  
  const { getCartItems, deleteProductOnCart } = useCartProducts();
  const [cartItens, setCartItens] = useState<CartItem[]>(getCartItems);

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
    deleteProductOnCart(id);
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
