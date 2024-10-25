import {
  PanelProducts,
  SectionDescription,
  SectionImage,
  SectionItem,
  SectionItemBadge,
  SectionTitle,
} from '@features/Home/styles/ProductItemContainer';
import { BadgeTopic } from '@globalComponents/BadgeTopic';
import { ColorType } from '@globalTypes/ColorType';
import { Product } from '@features/Home/types/Product';
import { ProductItemFooter } from './ProductItemFooter';

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <PanelProducts>
      <SectionImage>
        <img src={'/ProductItem' + product.image + '.png'} />
      </SectionImage>
      <SectionItemBadge>
        <BadgeTopic labels={product.types} type={ColorType.PRIMARY} />
      </SectionItemBadge>
      <SectionItem>
        <SectionTitle>{product.name}</SectionTitle>
      </SectionItem>
      <SectionItem>
        <SectionDescription>{product.description}</SectionDescription>
      </SectionItem>
      <SectionItem>
        <ProductItemFooter
          nameRange={'productQuantity' + product.id}
          value={product.value}
        />
      </SectionItem>
    </PanelProducts>
  );
}
