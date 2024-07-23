import { HomeBannerSubtitles } from "../styles/HomeBannerSubtitles";
import { TitleBanner } from "../styles/TitleBanner";
import { HomeBannerTitles } from "../styles/HomeBannerTitles";
import { BadgeDescription } from "../../../components/BadgeDescription";
import { ColorVariant } from "../../../types/ColorType";

export function HomeBannerTitle() {
  return (
    <div>
      <div>
        <HomeBannerTitles>
          <TitleBanner>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </TitleBanner>
          <span style={{ fontSize: "20px" }}>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </HomeBannerTitles>
      </div>
      <div>
        <HomeBannerSubtitles>
          <BadgeDescription
            icon="/BannerCart.svg"
            color={ColorVariant.ORANGE}
            label="Compra simples e segura"
          />
          <BadgeDescription
            icon="/BannerBox.svg"
            color={ColorVariant.BLACK}
            label="Embalagem mantém o café intacto"
          />
        </HomeBannerSubtitles>
        <HomeBannerSubtitles>
          <BadgeDescription
            icon="/BannerClock.svg"
            color={ColorVariant.YELLOW}
            label="Entrega rápida e rastreada"
          />
          <BadgeDescription
            icon="/BannerCoffee.svg"
            color={ColorVariant.PURPLE}
            label="O café chega fresquinho até você"
          />
        </HomeBannerSubtitles>
      </div>
    </div>
  );
}
