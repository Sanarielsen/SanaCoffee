import { ButtonIconContainer } from "@globalStyles/ButtonIconContainer";

interface ButtonIconProps {
  pathImage: string;
  onClick: () => void;
}

export function ButtonIcon( {pathImage, onClick}: ButtonIconProps ) {
  return (
    <ButtonIconContainer
      style={{
        backgroundColor: "#8047F8",
      }}
      onClick={onClick}
    >
      <img src={pathImage} />
    </ButtonIconContainer>
  );
}
