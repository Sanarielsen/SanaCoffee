import { useState } from 'react';

import {
  InputRangeAddValue,
  InputRangeContainer,
  InputRangeSubstractValue,
} from '@globalStyles/InputRangeContainer';

interface InputRangeProps {
  name: string;
  value: number;
  onChange: (currentQuantity: number) => void;
}

export function InputRange({ name, value, onChange }: InputRangeProps) {
  const [currentValue, setCurrentValue] = useState<number>(value);

  if (value !== currentValue) {
    setCurrentValue(value);
  }

  return (
    <InputRangeContainer>
      <InputRangeSubstractValue
        type="button"
        onClick={() => {
          if (currentValue > 0) {
            setCurrentValue(currentValue - 1);
            onChange(currentValue - 1);
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
          disabled
        />
      </div>
      <InputRangeAddValue
        type="button"
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
