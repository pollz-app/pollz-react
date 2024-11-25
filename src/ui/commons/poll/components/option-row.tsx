import Icon from "@expo/vector-icons/Ionicons";
import { Option, PollTypes } from "pollz-js";
import React from "react";
import { usePollz } from "../../../../use-pollz";
import { OptionLabel, OptionWrapper, Tick } from "../styles";
import { Circle } from "./styles";

type Props = {
  option: Option;
  selectedOptionIds: number[];
  handleSelectOption(id: number | null): void;
  pollTypeId: PollTypes;
};

export const OptionRow: React.FC<Props> = ({
  option,
  selectedOptionIds,
  handleSelectOption,
  pollTypeId,
}) => {
  const { theme } = usePollz();

  return (
    <OptionWrapper>
      <Circle
        color={theme?.colors.primary}
        active={selectedOptionIds.includes(option.id)}
        onPress={() => handleSelectOption(option.id)}
      >
        {selectedOptionIds.includes(option.id) && (
          <>
            {pollTypeId === PollTypes.MultipleChoice ? (
              <Icon name="checkmark" color={"white"} size={30} />
            ) : null}

            {[PollTypes.Scale, PollTypes.SingleChoice].includes(pollTypeId) ? (
              <Tick />
            ) : null}
          </>
        )}
      </Circle>

      <OptionLabel onPress={() => handleSelectOption(option.id)}>
        {option.label}
      </OptionLabel>
    </OptionWrapper>
  );
};
