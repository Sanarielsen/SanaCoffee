import { Badge } from '@globalComponents/Badge';
import { ColorType } from '@globalTypes/ColorType';

export function HeaderAddress() {
  return (
    <div style={{ height: '38px' }}>
      <Badge
        icon="./AddressIcon.svg"
        label="Rua Feira de Montana Linda, 1234"
        type={ColorType.INFO}
        onClick={() => console.log('Endereço selecionado')}
      />
    </div>
  );
}
