import { BannerContainer } from "../styles/BannerContainer";
import { HomeBannerImage } from "@features/Home/components/HomeBannerImage";
import { HomeBannerTitle } from "@features/Home/components/HomeBannerTitle";
import { HomeContextFirst } from "@features/Home/styles/HomeContextFirst";
import { HomeContextSecond } from "@features/Home/styles/HomeContextSecond";
import { HomeProductsList } from "../components/HomeProductsList";
import { ProductsContainer } from "../styles/ProductsContainer";

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
