import { Divider } from "@globalStyles/Divider";

import { CartItem } from "@features/Cart/types/CartItem";
import { CartReviewEmptyContainer, TextDescription, TextLink, TextLinkContainer } from "@features/Cart/styles/CartReviewListItemContainer";
import { CartReviewItem } from "./CarReviewItem";

interface CartReviewListItemProps {
  items: CartItem[];
  onChangeItem: (id: number, newQuantity: number) => void;
  onDeleteItem: (id: number) => void;
}

export function CartReviewListItem({ items, onChangeItem, onDeleteItem }: CartReviewListItemProps) { 

  if (items.length === 0) {
    return (
      <>
        <CartReviewEmptyContainer>      
          <TextDescription>Seu carrinho está vazio</TextDescription>
          <TextDescription>Adicione ao menos um item pelo cardápio</TextDescription>
          <TextLinkContainer>
            <TextLink href="/">Voltar ao cardápio</TextLink>
          </TextLinkContainer>
        </CartReviewEmptyContainer>
        <Divider />       
      </>
    )
  }

  return items.map((item) => {
    return (
      <>
        <div key={item.id}>
          <CartReviewItem 
            key={item.id}
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
