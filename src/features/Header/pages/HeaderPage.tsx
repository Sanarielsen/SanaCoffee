import { HeaderAddress } from "../components/HeaderAddress";
import { HeaderBrand } from "../components/HeaderBrand";
import { HeaderCart } from "../components/HeaderCart";
import { HeaderContainer } from "../styles/HeaderContainer";
import { HeaderGroup } from "../styles/HeaderGroup";

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
