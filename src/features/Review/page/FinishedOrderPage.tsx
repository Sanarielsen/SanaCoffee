import { MainContainer } from "@features/Review/styles/FinishedOrderPageContainer";
import { OrderHeader } from "@features/Review/components/OrderHeader";
import { OrderInformations } from "@features/Review/components/OrderInformations";

export function FinishedOrderPage() {

  return (
    <MainContainer>
      <OrderHeader />
      <OrderInformations />
    </MainContainer>
  );
}