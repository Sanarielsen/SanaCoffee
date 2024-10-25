import { HomeBannerImage } from '@features/Home/components/HomeBannerImage';
import { HomeBannerTitle } from '@features/Home/components/HomeBannerTitle';
import { HomeProductsList } from '@features/Home/components/HomeProductsList';
import {
  BannerContainer,
  HomeContextFirst,
  HomeContextSecond,
  ProductsContainer,
} from '@features/Home/styles/HomePageContainer';

export function HomePage() {
  return (
    <>
      <BannerContainer>
        <HomeContextFirst>
          <HomeBannerTitle />
        </HomeContextFirst>
        <HomeContextSecond>
          <HomeBannerImage />
        </HomeContextSecond>
      </BannerContainer>
      <ProductsContainer>
        <HomeProductsList />
      </ProductsContainer>
    </>
  );
}
