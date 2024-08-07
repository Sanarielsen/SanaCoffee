import {
  ButtonIconContainer,
  IconSection,
  IconSectionWithoutTitle,
  IconTitle,
} from "@globalStyles/ButtonIconContainer";
import { ColorType } from "@globalTypes/ColorType";
import { useTheme } from "styled-components";

interface ButtonIconProps {
  label?: string;
  color: ColorType;
  pathImage: string;
  onClick: () => void;
}

export function ButtonIcon({
  label,
  color,
  pathImage,
  onClick,
}: ButtonIconProps) {
  const theme = useTheme();

  return (
    <ButtonIconContainer color={theme[color]} onClick={onClick}>
      {label ? (
        <>
          <IconSection>
            <img src={pathImage} />
          </IconSection>
          <IconTitle color={color}>{label}</IconTitle>
        </>
      ) : (
        <IconSectionWithoutTitle>
          <img src={pathImage} />
        </IconSectionWithoutTitle>
      )}
    </ButtonIconContainer>
  );
}
