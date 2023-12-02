import { useState } from "react";

// Define a type for the return value of useToggle
type UseToggleReturn = [
  isOpen: boolean,
  toggleValue: (value?: boolean) => void,
  toggleValueTrue: () => void,
  toggleValueFalse: () => void
];

export const useToggle = (initialValue: boolean): UseToggleReturn => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = (newValue?: boolean) => {
    if (newValue !== undefined) {
      setValue(newValue);
    } else {
      setValue(!value);
    }
  };

  const toggleValueTrue = () => {
    setValue(true);
  };

  const toggleValueFalse = () => {
    setValue(false);
  };

  return [value, toggleValue, toggleValueTrue, toggleValueFalse];
};
