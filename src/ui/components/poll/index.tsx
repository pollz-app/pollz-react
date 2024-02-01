import React from "react";
import { BasePoll } from "../../commons/poll";
import { hook } from "./hook";

type Props = {
  pollId: number;
  userId: string;
  onSubmitted?: (poll: any) => void;
  confirmToVote?: boolean;
  withoutFeedback?: boolean;
  confirmText?: string;
  greetingsText?: string;
  canAddOptions?: boolean;
};

export const Poll: React.FC<Props> = ({
  pollId,
  onSubmitted,
  userId,
  confirmToVote = true,
  withoutFeedback = false,
  confirmText = "Vote",
  greetingsText = "Thanks for voting!",
  canAddOptions = false,
}) => {
  const {
    poll,
    selectedOptionIds,
    handleSelectOption,
    loading,
    voted,
    handleVote,
    handleAddOption,
    addingOption,
  } = hook(pollId, userId, confirmToVote, withoutFeedback, onSubmitted);

  return (
    <BasePoll
      poll={poll}
      voted={voted}
      greetingsText={greetingsText}
      canAddOptions={canAddOptions}
      addingOption={addingOption}
      handleAddOption={handleAddOption}
      selectedOptionIds={selectedOptionIds}
      handleSelectOption={handleSelectOption}
      confirmToVote={confirmToVote}
      handleVote={handleVote}
      loading={loading}
      confirmText={confirmText}
    />
  );
};
