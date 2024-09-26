import React from "react";
import { Switch } from "react-native";
import { usePollz } from "../../../use-pollz";
import { SwitchWrapper } from "./styles";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Toggle: React.FC<SwitchProps> = ({ checked, onChange }) => {
  const { theme } = usePollz();
  return (
    <SwitchWrapper>
      <Switch
        // @ts-ignore
        activeThumbColor={theme?.colors.primary}
        trackColor={{
          false: "#e9e9e9",
          true: theme?.colors.primary + "70",
        }}
        thumbColor={theme?.colors.primary}
        value={checked}
        onValueChange={onChange}
      />
    </SwitchWrapper>
  );
};
