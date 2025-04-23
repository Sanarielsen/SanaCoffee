import { useLocation } from 'react-router-dom';

import { MainContainer } from '@features/Review/styles/FinishedOrderPageContainer';
import { OrderHeader } from '@features/Review/components/OrderHeader';
import { OrderInformations } from '@features/Review/components/OrderInformations';
import { CartPersonAddress } from '@globalTypes/CartAddress';

export function FinishedOrderPage() {

  const locationVariables = useLocation();
  const userAddress = locationVariables.state as CartPersonAddress;  

  return (
    <MainContainer>
      <OrderHeader />
      <OrderInformations address={userAddress} />
    </MainContainer>
  );
}
