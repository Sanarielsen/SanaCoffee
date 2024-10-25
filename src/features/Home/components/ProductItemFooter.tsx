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
}

export function ProductItemFooter({
  nameRange,
  value,
}: ProductItemFooterProps) {
  const [quantityProduct, setQuantityProduct] = useState(0);

  const handleClickAddCurrentItemOnCart = () => {
    //Add logic to add item on cart
    setQuantityProduct(() => 0);
  };

  //Component capable receive value of product with ever 3 numbers in total.
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
          color={ColorType.SECONDARY}
          pathImage="/IconCart.svg"
          onClick={handleClickAddCurrentItemOnCart}
        />
      </div>
    </PanelContainer>
  );
}
