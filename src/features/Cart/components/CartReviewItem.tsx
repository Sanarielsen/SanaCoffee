import { useState } from 'react';

import { ButtonIcon } from '@globalComponents/ButtonIcon';
import { ColorType } from '@globalTypes/ColorType';
import { InputRange } from '@globalComponents/InputRange';

import { CartItem } from '@globalTypes/CartItem';
import {
  CartReviewItemContainer,
  ItemActions,
  ItemDescrition,
  ItemImage,
  ItemSection,
  ItemTitle,
  ItemValue,
} from '@features/Cart/styles/CartReviewItemContainer';
import { ModalConfirmation } from '@globalComponents/ModalConfirmation';

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
  const [modalState, setModalState] = useState(false);

  return (
    <CartReviewItemContainer>
      <ItemSection>
        <ItemImage>
          <img
            src={`${import.meta.env.BASE_URL}/ProductItem${item.product.image}.png`}
            alt={`Produto ${item.product.id} do carrinho com o nome de ${item.product.name}`}
          />
        </ItemImage>
        <ItemDescrition>
          <div>
            <ItemTitle>{item.product.name}</ItemTitle>
          </div>
          <ItemActions>
            <InputRange
              name={item.product.name}
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
                setModalState(true);
              }}
            />
          </ItemActions>
        </ItemDescrition>
      </ItemSection>
      <ItemValue>
        R$ {(item.quantity * item.product.value).toFixed(2)}
      </ItemValue>

      <ModalConfirmation
        open={modalState}
        title="Excluir item do carrinho"
        message="Deseja realmente excluir este item do carrinho?"
        onClickConfirm={() => onDeleteItem(item.id)}
        onClickClose={() => setModalState(false)}
      />
    </CartReviewItemContainer>
  );
}
