import { BadgeDescription } from "@globalComponents/BadgeDescription";
import { ColorVariant } from "@globalTypes/ColorVariant";
import { DescriptionBanner } from "@features/Home/styles/DescriptionBanner";
import { HomeBannerBlock } from "@features/Home/styles/HomeBannerBlock";
import { HomeBannerSubtitles } from "@features/Home/styles/HomeBannerSubtitles";
import { HomeBannerTitles } from "@features/Home/styles/HomeBannerTitles";
import { TitleBanner } from "@features/Home/styles/TitleBanner";

export function HomeBannerTitle() {
  return (
    <div>
      <div>
        <HomeBannerTitles>
          <TitleBanner>
            Encontre o café perfeito para qualquer hora do dia
          </TitleBanner>
          <DescriptionBanner>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </DescriptionBanner>
        </HomeBannerTitles>
      </div>
      <div>
        <HomeBannerSubtitles>
          <HomeBannerBlock>
            <BadgeDescription
              icon="/BannerCart.svg"
              color={ColorVariant.ORANGE}
              label="Compra simples e segura"
            />
          </HomeBannerBlock>
          <HomeBannerBlock>
            <BadgeDescription
              icon="/BannerBox.svg"
              color={ColorVariant.BLACK}
              label="Embalagem mantém o café intacto"
            />
          </HomeBannerBlock>
        </HomeBannerSubtitles>
        <HomeBannerSubtitles>
          <HomeBannerBlock>
            <BadgeDescription
              icon="/BannerClock.svg"
              color={ColorVariant.YELLOW}
              label="Entrega rápida e rastreada"
            />
          </HomeBannerBlock>
          <HomeBannerBlock>
            <BadgeDescription
              icon="/BannerCoffee.svg"
              color={ColorVariant.PURPLE}
              label="O café chega fresquinho até você"
            />
          </HomeBannerBlock>
        </HomeBannerSubtitles>
      </div>
    </div>
  );
}
