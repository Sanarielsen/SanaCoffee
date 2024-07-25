import { ProductItemContainer } from "../styles/ProductItemContainer";
import { ColorType } from "@globalTypes/ColorType";
import { ProductItemImage } from "../styles/ProductItemImage";
import { ProductItemBadge } from "../styles/ProductItemBadge";
import { BadgeTopic } from "@globalComponents/BadgeTopic";
import { ProductItemTitle, ProductItemDescription, ProductItemSection } from "../styles/ProductItemTitle";
import { ProductItemFooter } from "./ProductItemFooter";
import { Product } from "../types/Product";

interface ProductItemProps {
  product: Product;
}

export function ProductItem( { product }: ProductItemProps ) {
  console.log("Produto: ", product); 

  return (
    <ProductItemContainer>
      <ProductItemImage>
        <img src={"/ProductItem" + product.image + ".png"} />
      </ProductItemImage>
      <ProductItemBadge>
        <BadgeTopic labels={product.types} type={ColorType.PRIMARY} />
      </ProductItemBadge>
      <ProductItemSection>
        <ProductItemTitle>{product.name}</ProductItemTitle>
      </ProductItemSection>
      <ProductItemSection>
        <ProductItemDescription>{product.description}</ProductItemDescription>
      </ProductItemSection>
      <ProductItemSection>
        <ProductItemFooter nameRange={"productQuantity" + product.id} value={product.value} />
      </ProductItemSection>
    </ProductItemContainer>
  )
}