import { productListMocked } from '@features/Home/utils/ProductListMocked';
import { PanelProducts } from '@features/Home/styles/ProductsListContainer';
import { ProductItem } from '@features/Home/components/ProductItem';

export function HomeProductsList() {
  return (
    <div>
      <div>
        <h1>Nossos cafés</h1>
      </div>
      <PanelProducts>
        {productListMocked.map((product, index) => {
          return <ProductItem key={index} product={product} />;
        })}
      </PanelProducts>
    </div>
  );
}
