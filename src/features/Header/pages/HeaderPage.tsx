import { HeaderAddress } from '@features/Header/components/HeaderAddress';
import { HeaderBrand } from '@features/Header/components/HeaderBrand';
import { HeaderCart } from '@features/Header/components/HeaderCart';
import { HeaderContainer, HeaderGroupBrand, HeaderGroupFeatures } from '@features/Header/styles/HeaderPageContainer';

export default function HeaderPage() {
  return (
    <>
      <HeaderContainer>
        <HeaderGroupBrand>
          <HeaderBrand />
        </HeaderGroupBrand>
        <HeaderGroupFeatures>
          <div>
            <HeaderAddress />
          </div>
          <div>
            <HeaderCart />
          </div>
        </HeaderGroupFeatures>
      </HeaderContainer>
    </>
  );
}
