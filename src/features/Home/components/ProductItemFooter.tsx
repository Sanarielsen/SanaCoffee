import { ButtonIcon } from "@globalComponents/ButtonIcon";
import {
  ProductItemFooterContainer,
  MoneyMetric,
  MoneyValue,
} from "../styles/ProductItemFooterContainer";
import { InputRange } from "@globalComponents/InputRange";
import { useState } from "react";

interface ProductItemFooterProps {
  nameRange: string;
  value: number;
}

export function ProductItemFooter({ nameRange, value }: ProductItemFooterProps) {
  const [quantityProduct, setQuantityProduct] = useState(0);

  const handleClickAddCurrentItemOnCart = () => {
    console.log("handleClickAddCurrentItemOnCart(" + nameRange + " | " + value + " | " + quantityProduct + ");");
    setQuantityProduct(() => 0);
  }

  //Component capable receive value of product with ever 3 numbers in total.
  return (
    <ProductItemFooterContainer>
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
        <ButtonIcon pathImage="/IconCart.svg" onClick={handleClickAddCurrentItemOnCart} />
      </div>
    </ProductItemFooterContainer>
  );
}
