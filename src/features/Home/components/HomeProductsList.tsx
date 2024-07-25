import { ProductsListContainer } from "../styles/ProductsListContainer";
import { productListMocked } from "../utils/ProductListMocked";
import { ProductItem } from "./ProductItem";

export function HomeProductsList() {
  return (
    <div>
      <div>
        <h1>Nossos cafés</h1>
      </div>
      <ProductsListContainer>
        {productListMocked.map((product) => {
          return <ProductItem product={product} />;
        })}
      </ProductsListContainer>
    </div>
  );
}
