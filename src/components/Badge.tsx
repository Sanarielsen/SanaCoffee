import { BadgeContainer } from '@globalStyles/BadgeContainer';
import { BadgeContext } from '@globalStyles/BadgeContext';
import { ColorType } from '@globalTypes/ColorType';

interface BadgeProps {
  icon?: string;
  label?: string;
  type: ColorType;
  onClick?: () => void;
}

const BadgeColors = {
  primary: '#F1E9C9',
  'primary-outlined': '#F1E9C9',
  secondary: '#EBE5F9',
  'secondary-outlined': '#EBE5F9',
  success: '#00FF00',
  danger: '#FF0000',
  warning: '#FFA500',
  info: '#EBE5F9',
  default: '#F1E9C9',
};

const BadgeTextColors = {
  primary: '#C47F17',
  'primary-outlined': '#C47F17',
  secondary: '#4B2995',
  'secondary-outlined': '#4B2995',
  success: '#00FF00',
  danger: '#FF0000',
  warning: '#FFA500',
  info: '#8047F8',
  default: '#C47F17',
};

export function Badge({ icon = '', label = '', type, onClick }: BadgeProps) {
  return (
    <BadgeContainer
      onClick={onClick}
      style={{
        height: '38px',
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
