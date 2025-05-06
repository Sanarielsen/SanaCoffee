import { Badge } from '@globalComponents/Badge';
import { ColorType } from '@globalTypes/ColorType';

export function HeaderAddress() {
  
  const isMobile = window.innerWidth < 1024;
  const addressCustomer = isMobile ? '' : 'Rua Feira de Montana Linda, 1234';

  return (
    <div style={{ height: '38px', margin: '8px 0' }}>
      <Badge
        icon="./AddressIcon.svg"
        label={addressCustomer}
        type={ColorType.INFO}
        onClick={() => console.log('Endereço selecionado')}
      />
    </div>
  );
}
