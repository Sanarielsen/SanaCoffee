import { ProductsListContainer } from "../styles/ProductsListContainer";

export function HomeProductsList() {
  return (
    <div>
      <div> 
        <h1>Nossos cafés</h1>
      </div>
      <ProductsListContainer>
        
        <div> Item 1 </div>
        <div> Item 2 </div>
        <div> Item 3 </div>
        <div> Item 4 </div>
        <div> Item 5 </div>
      </ProductsListContainer>
    </div>
  );
}
