import React from "react";
import { BasePoll } from "../../commons/poll";
import { hook } from "./hook";

type Props = {
  pollToken: string;
  userId?: string;
  onSubmitted?: (poll: any) => void;
  confirmToVote?: boolean;
  withoutFeedback?: boolean;
  confirmText?: string;
  greetingsText?: string;
};

export const AnonymousPoll: React.FC<Props> = ({
  pollToken,
  onSubmitted,
  userId,
  confirmToVote = true,
  withoutFeedback = false,
  confirmText = "Vote",
  greetingsText = "Thanks for voting!",
}) => {
  const {
    poll,
    selectedOptionIds,
    handleSelectOption,
    loading,
    voted,
    handleVote,
  } = hook(pollToken, userId, confirmToVote, withoutFeedback, onSubmitted);

  return (
    <BasePoll
      poll={poll}
      voted={voted}
      greetingsText={greetingsText}
      selectedOptionIds={selectedOptionIds}
      handleSelectOption={handleSelectOption}
      confirmToVote={confirmToVote}
      handleVote={handleVote}
      loading={loading}
      confirmText={confirmText}
    />
  );
};
