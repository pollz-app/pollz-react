import React from "react";
import { Slider, SwitchInput, SwitchWrapper } from "./styles";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Toggle: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <SwitchWrapper>
      <SwitchInput
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <Slider />
    </SwitchWrapper>
  );
};
