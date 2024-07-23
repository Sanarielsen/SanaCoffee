import { HomeBannerSubtitles } from "../styles/HomeBannerSubtitles";
import { TitleBanner } from "../styles/TitleBanner";
import { HomeBannerTitles } from "../styles/HomeBannerTitles";

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
          <span>Compra simples e segura</span>
          <span>Entrega rápida e rastreada</span>
        </HomeBannerSubtitles>
        <HomeBannerSubtitles>
          <span>Embalagem mantém o café intacto</span>
          <span>O café chega fresquinho até você</span>
        </HomeBannerSubtitles>
      </div>
    </div>
  );
}
