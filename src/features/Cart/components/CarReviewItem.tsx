import { useState } from 'react';

import { ButtonIcon } from '@globalComponents/ButtonIcon';
import { ColorType } from '@globalTypes/ColorType';
import { InputRange } from '@globalComponents/InputRange';

import { CartItem } from '@features/Cart/types/CartItem';
import {
  CartReviewItemContainer,
  ItemActions,
  ItemDescrition,
  ItemImage,
  ItemSection,
  ItemTitle,
  ItemValue,
} from '@features/Cart/styles/CartReviewItemContainer';

interface CartReviewItemProps {
  item: CartItem;
  onChangeQuantity: (id: number, currentQuantity: number) => void;
  onDeleteItem: (id: number) => void;
}

export function CartReviewItem({
  item,
  onChangeQuantity,
  onDeleteItem,
}: CartReviewItemProps) {
  const [itemQuantity, setItemQuantity] = useState(item.quantity);

  return (
    <CartReviewItemContainer>
      <ItemSection>
        <ItemImage>
          <img
            src={`/ProductItem${item.image}.png`}
            alt={`Produto ${item.id} do carrinho com o nome de ${item.name}`}
          />
        </ItemImage>
        <ItemDescrition>
          <div>
            <ItemTitle>{item.name}</ItemTitle>
          </div>
          <ItemActions>
            <InputRange
              name={item.name}
              value={itemQuantity}
              onChange={(quantity) => {
                setItemQuantity(quantity);
                onChangeQuantity(item.id, quantity);
              }}
            />
            <ButtonIcon
              type="button"
              label="Remover"
              color={ColorType.SECONDARY_OUTLINED}
              pathImage="/IconThrashPurple.svg"
              onClick={() => {
                onDeleteItem(item.id);
              }}
            />
          </ItemActions>
        </ItemDescrition>
      </ItemSection>
      <ItemValue>R$ {(item.quantity * item.value).toFixed(2)}</ItemValue>
    </CartReviewItemContainer>
  );
}
