import { Option } from "pollz-js";
import React, { useCallback, useMemo } from "react";
import { theme } from "../../../themes/base";
import { OptionButtonLabel, OptionButtonWrapper } from "./styles";

type Props = {
  handleSelectOption: (optionId: number) => void;
  option: Option;
  selectedOptionIds: number[];
};

export const OptionButton: React.FC<Props> = ({
  handleSelectOption,
  option,
  selectedOptionIds,
}) => {
  const isSelected = useMemo(
    () => selectedOptionIds.includes(option.id),
    [selectedOptionIds, option.id]
  );
  const backgroundColor = isSelected ? "#5400a31f" : "white";
  const borderColor = isSelected ? theme.colors.primary : "#ccc";

  const handleClick = useCallback(() => {
    handleSelectOption(option.id);
  }, [handleSelectOption, option.id]);

  return (
    <OptionButtonWrapper
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onClick={handleClick}
      key={option.id}
    >
      <OptionButtonLabel>{option.label}</OptionButtonLabel>
    </OptionButtonWrapper>
  );
};
