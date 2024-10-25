import { BadgeDescription } from '@globalComponents/BadgeDescription';
import { ColorVariant } from '@globalTypes/ColorVariant';

import {
  DescriptionSection,
  PanelAreaSubtitles,
  PanelContainer,
  SubtitlesSection,
  TitleSection,
} from '@features/Home/styles/HomeBannerTitleContainer';

export function HomeBannerTitle() {
  return (
    <div>
      <div>
        <PanelContainer>
          <TitleSection>
            Encontre o café perfeito para qualquer hora do dia
          </TitleSection>
          <DescriptionSection>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </DescriptionSection>
        </PanelContainer>
      </div>
      <div>
        <PanelAreaSubtitles>
          <SubtitlesSection>
            <BadgeDescription
              icon="/BannerCart.svg"
              color={ColorVariant.ORANGE}
              label="Compra simples e segura"
            />
          </SubtitlesSection>
          <SubtitlesSection>
            <BadgeDescription
              icon="/BannerBox.svg"
              color={ColorVariant.BLACK}
              label="Embalagem mantém o café intacto"
            />
          </SubtitlesSection>
        </PanelAreaSubtitles>
        <PanelAreaSubtitles>
          <SubtitlesSection>
            <BadgeDescription
              icon="/BannerClock.svg"
              color={ColorVariant.YELLOW}
              label="Entrega rápida e rastreada"
            />
          </SubtitlesSection>
          <SubtitlesSection>
            <BadgeDescription
              icon="/BannerCoffee.svg"
              color={ColorVariant.PURPLE}
              label="O café chega fresquinho até você"
            />
          </SubtitlesSection>
        </PanelAreaSubtitles>
      </div>
    </div>
  );
}
