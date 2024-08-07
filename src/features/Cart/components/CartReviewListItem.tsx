import { useState } from "react";

import { Divider } from "@globalStyles/Divider";

import { CartItem } from "@features/Cart/types/CartItem";
import { cartItensMocked } from "@features/Cart/utils/CartItensMocked";
import { CartReviewItem } from "./CarReviewItem";
import { TextDescription } from "@features/Cart/styles/CartReviewListItemContainer";

export function CartReviewListItem() {
  const [cartItens, setCartItens] = useState<CartItem[]>(cartItensMocked);

  const handleDeleteItem = (id: number) => {
    setCartItens((prevCartItens) =>
      prevCartItens.filter((item) => item.id !== id)
    );
  };

  if (cartItens.length === 0) {
    return <TextDescription>Seu carrinho está vazio</TextDescription>;
  }

  return cartItens.map((item) => {
    return (
      <>
        <CartReviewItem item={item} onDeleteItem={handleDeleteItem} />
        <Divider />
      </>
    );
  });
}
