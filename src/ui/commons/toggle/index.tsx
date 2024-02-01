import React from "react";
import { usePollz } from "../../../use-pollz";
import { Slider, SwitchInput, SwitchWrapper } from "./styles";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Toggle: React.FC<SwitchProps> = ({ checked, onChange }) => {
  const { theme } = usePollz();
  return (
    <SwitchWrapper>
      <SwitchInput
        color={theme?.colors.primary}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <Slider />
    </SwitchWrapper>
  );
};
