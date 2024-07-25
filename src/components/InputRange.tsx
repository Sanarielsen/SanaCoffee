import {
  InputRangeAddValue,
  InputRangeContainer,
  InputRangeSubstractValue,
} from "@globalStyles/InputRangeContainer";
import { useState } from "react";

interface InputRangeProps {
  name: string;
  value: number;
  onChange: (currentQuantity: number) => void;
}

export function InputRange({ name, value, onChange }: InputRangeProps) {
  const [currentValue, setCurrentValue] = useState<number>(value);

  if ( value !== currentValue ) {
    setCurrentValue(value);
  }

  return (
    <InputRangeContainer>
      <InputRangeSubstractValue
        onClick={() => {
          if (currentValue > 0) { 
            setCurrentValue(currentValue - 1)
            onChange(currentValue - 1)
          }
        }}
      >
        -
      </InputRangeSubstractValue>
      <div>
        <input
          type="number"
          name={name}
          min={0}
          max={99}
          value={currentValue}
        />
      </div>
      <InputRangeAddValue
        onClick={() => {
          onChange(currentValue + 1);
          setCurrentValue(currentValue + 1);
        }}
      >
        +
      </InputRangeAddValue>
    </InputRangeContainer>
  );
}
