
import { BadgeCircleBody } from "../styles/BadgeCircleBody";
import { BadgeContext } from "../styles/BadgeContext";
import { BadgeContainerCircle } from "../styles/BadgeIconCircle";
import { ColorVariant } from "../types/ColorType";

interface BadgeDescriptionProps {
  icon: string;
  color: ColorVariant;
  label: string;
}

const BadgeColors = {
  black: "#574F4D",
  orange: "#C47F17",
  purple: "#8047F8",
  yellow: "#DBAC2C"
};

export function BadgeDescription({
  icon,
  color,
  label
}: BadgeDescriptionProps) {
  return (
    <>
      <BadgeCircleBody> 
        <BadgeContainerCircle
          onClick={() => {}}
          style={{
            backgroundColor: BadgeColors[color]
          }}
        >
          <BadgeContext>
            <img src={icon} />
          </BadgeContext>
        </BadgeContainerCircle>
        <span>{label}</span>
      </BadgeCircleBody>
    </>
  );
}
