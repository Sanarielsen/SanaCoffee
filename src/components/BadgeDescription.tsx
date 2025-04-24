import { ReactNode } from 'react';
import { BadgeCircleBody, BadgeText } from '@globalStyles/BadgeCircleBody';
import { BadgeContainerCircle } from '@globalStyles/BadgeIconCircle';
import { BadgeContext } from '@globalStyles/BadgeContext';
import { ColorVariant } from '@globalTypes/ColorVariant';

interface BadgeDescriptionProps {
  icon: string;
  color: ColorVariant;
  label: ReactNode;
  description?: ReactNode;
}

const BadgeColors = {
  black: '#574F4D',
  orange: '#C47F17',
  purple: '#8047F8',
  yellow: '#DBAC2C',
};

export function BadgeDescription({
  icon,
  color,
  label,
  description,
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
        <BadgeText>
          <span>{label}</span>
          <span>{description}</span>
        </BadgeText>
      </BadgeCircleBody>
    </>
  );
}
