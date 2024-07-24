import { HomeBannerImage } from "@features/Home/components/HomeBannerImage";
import { HomeBannerTitle } from "@features/Home/components/HomeBannerTitle";
import { HomeContainer } from "@features/Home/styles/HomeContainer";
import { HomeContextFirst } from "@features/Home/styles/HomeContextFirst";
import { HomeContextSecond } from "@features/Home/styles/HomeContextSecond";

export function HomePage() {
  return (
    <HomeContainer>
      <HomeContextFirst>
        <HomeBannerTitle />
      </HomeContextFirst>
      <HomeContextSecond>
        <HomeBannerImage />
      </HomeContextSecond>
    </HomeContainer>
  )
}