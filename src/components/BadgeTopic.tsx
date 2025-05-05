import { ProductTypeOption } from '@features/Home/types/ProductType';
import { BadgeTopicContainer } from '@globalStyles/BadgeTopicContainer';
import { BadgeTopicContext } from '@globalStyles/BadgeTopicContext';
import { ColorType } from '@globalTypes/ColorType';

interface BadgeTopicProps {
  labels: ProductTypeOption[];
  type: ColorType;
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

export function BadgeTopic({ labels, type }: BadgeTopicProps) {
  return (
    <>
      {labels.map((label, index) => {
        return (
          <BadgeTopicContainer
            key={index}
            style={{
              fontSize: '10px',
              lineHeight: '130%',
              fontWeight: 'bold',
              backgroundColor: BadgeColors[type],
              color: BadgeTextColors[type],
            }}
          >
            <BadgeTopicContext>{label}</BadgeTopicContext>
          </BadgeTopicContainer>
        );
      })}
    </>
  );
}
