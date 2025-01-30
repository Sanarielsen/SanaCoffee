import {
  PanelProduct,
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
import { useCartProducts } from 'src/contexts/CartProductsContext';

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  const { addProductOnCart, getLastIdOnCart } = useCartProducts();

  return (        
    <PanelProduct>
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
          onRefreshQuantityProduct={(quantity) => addProductOnCart( { id: (getLastIdOnCart() + 1), quantity, product } )}
        />
      </SectionItem>
    </PanelProduct>
    
  );
}
