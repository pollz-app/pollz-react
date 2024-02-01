import { Option, PollTypes } from "pollz-js";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";
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
        onClick={() => handleSelectOption(option.id)}
      >
        {selectedOptionIds.includes(option.id) && (
          <>
            {pollTypeId === PollTypes.MultipleChoice ? (
              <IoIosCheckmark color={"white"} size={30} />
            ) : null}

            {pollTypeId === PollTypes.SingleChoice ? <Tick /> : null}
          </>
        )}
      </Circle>

      <OptionLabel onClick={() => handleSelectOption(option.id)}>
        {option.label}
      </OptionLabel>
    </OptionWrapper>
  );
};
