import { HomeBannerTitle } from "../components/HomeBannerTitle";
import { HomeBannerImage } from "../components/HomeBannerImage";
import { HomeContainer } from "../styles/HomeContainer";
import { HomeContextFirst } from "../styles/HomeContextFirst";
import { HomeContextSecond } from "../styles/HomeContextSecond";

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