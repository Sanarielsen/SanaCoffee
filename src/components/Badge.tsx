import { BadgeContainer } from "../styles/BadgeContainer";
import { BadgeContext } from "../styles/BadgeContext";
import { ColorType } from "../types/ColorType";

interface BadgeProps {
  icon?: string;
  label?: string;
  type: ColorType;
  onClick: () => void;
}

const BadgeColors = {
  success: "#00FF00",
  danger: "#FF0000",
  warning: "#FFA500",
  info: "#EBE5F9",
  default: "#F1E9C9",
};

const BadgeTextColors = {
  success: "#00FF00",
  danger: "#FF0000",
  warning: "#FFA500",
  info: "#8047F8",
  default: "#C47F17",
};

export function Badge({ icon = "", label = "", type, onClick }: BadgeProps) {
  return (
    <BadgeContainer
      onClick={onClick}
      style={{
        backgroundColor: BadgeColors[type],
        color: BadgeTextColors[type],
      }}
    >
      {icon ? (
        <BadgeContext>
          <img src={icon} />
        </BadgeContext>
      ) : null}
      {label ? <BadgeContext>{label}</BadgeContext> : null}
    </BadgeContainer>
  );
}
