import { BadgeCircleBody } from "@globalStyles/BadgeCircleBody";
import { BadgeContainerCircle } from "@globalStyles/BadgeIconCircle";
import { BadgeContext } from "@globalStyles/BadgeContext";
import { ColorVariant } from "@globalTypes/ColorVariant";

interface BadgeDescriptionProps {
  icon: string;
  color: ColorVariant;
  label: string;
}

const BadgeColors = {
  black: "#574F4D",
  orange: "#C47F17",
  purple: "#8047F8",
  yellow: "#DBAC2C",
};

export function BadgeDescription({
  icon,
  color,
  label,
}: BadgeDescriptionProps) {
  return (
    <>
      <BadgeCircleBody>
        <BadgeContainerCircle
          onClick={() => {}}
          style={{
            backgroundColor: BadgeColors[color],
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
