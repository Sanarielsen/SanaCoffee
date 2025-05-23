import { Divider } from '@globalStyles/Divider';

import { CartItem } from '@globalTypes/CartItem';
import {
  CartReviewEmptyContainer,
  TextDescription,
  TextLink,
  TextLinkContainer,
} from '@features/Cart/styles/CartReviewListItemContainer';
import { CartReviewItem } from './CartReviewItem';

interface CartReviewListItemProps {
  items: CartItem[] | null;
  onChangeItem: (id: number, newQuantity: number) => void;
  onDeleteItem: (id: number) => void;
}

export function CartReviewListItem({
  items,
  onChangeItem,
  onDeleteItem,
}: CartReviewListItemProps) {
  if (!items || items.length === 0) {
    return (
      <>
        <CartReviewEmptyContainer>
          <TextDescription>Seu carrinho está vazio</TextDescription>
          <TextDescription>
            Adicione ao menos um item pelo cardápio
          </TextDescription>
          <TextLinkContainer>
            <TextLink href="/">Voltar ao cardápio</TextLink>
          </TextLinkContainer>
        </CartReviewEmptyContainer>
        <Divider />
      </>
    );
  }

  return items.map((item) => {
    return (
      <>
        <div key={item.id}>
          <CartReviewItem
            key={item.product.id}
            item={item}
            onChangeQuantity={onChangeItem}
            onDeleteItem={onDeleteItem}
          />
          <Divider />
        </div>
      </>
    );
  });
}
