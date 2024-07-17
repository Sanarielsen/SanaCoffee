import { HeaderBrand } from "../components/HeaderBrand";
import { HeaderContainer } from "../styles/HeaderContainer";

export default function HeaderPage() {
  return (
    <>
      <HeaderContainer>
        <div>
          <HeaderBrand />
        </div>
        <div>
          Endereço e Carrinho
        </div>
      </HeaderContainer>
    </>
  );
}
