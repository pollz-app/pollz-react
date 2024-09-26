import { PollTypes, PollWithOptions } from "pollz-js";
import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "../activity-indicator";
import { NewOption } from "../new-option";
import { Footer } from "./components/footer";
import { Greetings } from "./components/greetings";
import { OptionButton } from "./components/option-button";
import { OptionRow } from "./components/option-row";
import { NoPollWrapper, PollName, Row, Wrapper } from "./styles";

type Props = {
  poll: PollWithOptions | null;
  voted: boolean;
  greetingsText: string;
  selectedOptionIds: number[];
  handleSelectOption: (optionId: number) => void;
  confirmToVote: boolean;
  handleVote: (optionIds?: number[]) => Promise<void>;
  loading: boolean;
  confirmText: string;
} & (
  | {
      canAddOptions: boolean;
      handleAddOption: (newOption: string) => Promise<void>;
      addingOption: boolean;
    }
  | {
      canAddOptions?: false;
      handleAddOption?: undefined;
      addingOption?: undefined;
    }
);

export const BasePoll: React.FC<Props> = ({
  poll,
  voted,
  greetingsText,
  canAddOptions,
  addingOption,
  handleAddOption,
  selectedOptionIds,
  handleSelectOption,
  confirmToVote,
  handleVote,
  loading,
  confirmText,
}) => {
  if (!poll) {
    return (
      <NoPollWrapper>
        <ActivityIndicator size={30} />
      </NoPollWrapper>
    );
  }

  return (
    <Wrapper>
      <PollName>{poll.name}</PollName>

      {voted ? (
        <Greetings greetingsText={greetingsText} />
      ) : (
        <>
          {canAddOptions && (
            <View style={{ marginBottom: 8 }}>
              <NewOption
                addingOption={addingOption}
                handleAddOption={handleAddOption}
              />
            </View>
          )}

          {poll.pollType.id === PollTypes.Scale ? (
            <Row>
              {poll.options.map((option) => (
                <OptionButton
                  key={option.id}
                  handleSelectOption={handleSelectOption}
                  option={option}
                  selectedOptionIds={selectedOptionIds}
                />
              ))}
            </Row>
          ) : (
            <>
              {poll.options.map((option) => (
                <OptionRow
                  pollTypeId={poll.pollType.id}
                  key={option.id}
                  option={option}
                  selectedOptionIds={selectedOptionIds}
                  handleSelectOption={handleSelectOption}
                />
              ))}
            </>
          )}

          {confirmToVote ? (
            <Footer
              handleVote={handleVote}
              selectedOptionIds={selectedOptionIds}
              loading={loading}
              confirmText={confirmText}
            />
          ) : null}
        </>
      )}
    </Wrapper>
  );
};
