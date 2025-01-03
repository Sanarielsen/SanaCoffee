import { ButtonIcon } from '@globalComponents/ButtonIcon';
import {
  PanelContainer,
  MoneyMetric,
  MoneyValue,
} from '@features/Home/styles/ProductItemFooterContainer';
import { InputRange } from '@globalComponents/InputRange';
import { useState } from 'react';
import { ColorType } from '@globalTypes/ColorType';

interface ProductItemFooterProps {
  nameRange: string;
  value: number;
  onRefreshQuantityProduct: (quantity: number) => void;
}

export function ProductItemFooter({
  nameRange,
  value,
  onRefreshQuantityProduct
}: ProductItemFooterProps) {
  const [quantityProduct, setQuantityProduct] = useState(0);

  const handleClickAddCurrentItemOnCart = () => {
        
    onRefreshQuantityProduct(quantityProduct);
    setQuantityProduct(() => 0);
  };
  
  return (
    <PanelContainer>
      <div>
        <MoneyMetric>R$</MoneyMetric>
        <MoneyValue>{value}</MoneyValue>
      </div>
      <div>
        <InputRange
          name={nameRange}
          value={quantityProduct}
          onChange={(currentQuantity) => {
            setQuantityProduct(currentQuantity);
          }}
        />
      </div>
      <div>
        <ButtonIcon
          type='button'
          color={ColorType.SECONDARY}
          pathImage="/IconCart.svg"
          onClick={handleClickAddCurrentItemOnCart}
        />
      </div>
    </PanelContainer>
  );
}
