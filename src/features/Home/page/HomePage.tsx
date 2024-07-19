import { HomeBannerTitle } from "../components/HomeBannerTitle";
import { HomeBannerImage } from "../components/HomeBannerImage";
import { HomeContainer } from "../styles/HomeContainer";
import { HomeContext } from "../styles/HomeContext";

export function HomePage() {
  return (
    <HomeContainer>
      <HomeContext>
        <HomeBannerTitle />
      </HomeContext>
      <HomeContext>
        <HomeBannerImage />
      </HomeContext>
    </HomeContainer>
  )
}