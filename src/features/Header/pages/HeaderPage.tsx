import { HeaderAddress } from "@features/Header/components/HeaderAddress";
import { HeaderBrand } from "@features/Header/components/HeaderBrand";
import { HeaderCart } from "@features/Header/components/HeaderCart";
import { HeaderContainer } from "@features/Header/styles/HeaderContainer";
import { HeaderGroup } from "@features/Header/styles/HeaderGroup";

export default function HeaderPage() {
  return (
    <>
      <HeaderContainer>
        <div>
          <HeaderBrand />
        </div>
        <HeaderGroup>
          <div>
            <HeaderAddress />
          </div>
          <div>
            <HeaderCart />
          </div>
        </HeaderGroup>
      </HeaderContainer>
    </>
  );
}
