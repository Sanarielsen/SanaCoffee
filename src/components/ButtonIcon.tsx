import {
  ButtonIconContainer,
  IconSection,
  IconSectionWithoutTitle,
  IconTitle,
} from "@globalStyles/ButtonIconContainer";
import { ColorType } from "@globalTypes/ColorType";
import { useState } from "react";
import { useTheme } from "styled-components";

interface ButtonIconProps {
  label?: string;
  type?: string;
  color: ColorType;
  pathImage: string;
  onClick: () => void;
  onHover?: () => void;
}

export function ButtonIcon({
  label,
  color,
  pathImage,
  onClick
}: ButtonIconProps) {
  const theme = useTheme();
  const [buttonHasHovered, setButtonHasHovered] = useState(false);
  
  const colorButton = buttonHasHovered ? theme[`${color}-hover`] : theme[color];

  return (
    <ButtonIconContainer 
      color={colorButton} 
      onClick={onClick} 
      onMouseEnter={() => setButtonHasHovered(true)} 
      onMouseLeave={() => setButtonHasHovered(false)}
    >
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
