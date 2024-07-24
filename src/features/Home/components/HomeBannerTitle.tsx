import { HomeBannerSubtitles } from "../styles/HomeBannerSubtitles";
import { TitleBanner } from "../styles/TitleBanner";
import { HomeBannerTitles } from "../styles/HomeBannerTitles";
import { BadgeDescription } from "../../../components/BadgeDescription";
import { ColorVariant } from "../../../types/ColorType";
import { HomeBannerBlock } from "../styles/HomeBannerBlock";
import { DescriptionBanner } from "../styles/DescriptionBanner";

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
