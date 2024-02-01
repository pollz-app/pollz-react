import { PollTypes } from "pollz-js";
import { useEffect, useMemo, useState } from "react";
import { useAnonymousPoll } from "../../../use-anonymous-poll";
import { usePollz } from "../../../use-pollz";

export const hook = (
  pollToken: string,
  userId: string | undefined,
  confirmToVote: boolean,
  withoutFeedback: boolean,
  onSubmitted?: (responses: number[]) => void
) => {
  const { sdk } = usePollz();
  const { poll } = useAnonymousPoll(pollToken);
  const [selectedOptionIds, setSelectedOptionIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [voted, setVoted] = useState(false);

  const initialSelectedOptionIds = useMemo(() => {
    return (
      poll?.options
        .filter((option) =>
          option.voters.some((voter) => voter.userId === userId)
        )
        .map((option) => option.id) || []
    );
  }, [poll, userId]);

  const handleVote = async (optionIds = selectedOptionIds) => {
    if (!poll || !optionIds.length) {
      return;
    }

    try {
      setLoading(true);

      await sdk.anonymous.voteAnonymously(pollToken, optionIds, userId);

      setLoading(false);
      onSubmitted?.(optionIds);

      if (!withoutFeedback) {
        setVoted(true);
      }
    } catch (error) {
      console.error("Error submitting vote:", error);
      setLoading(false);
    }
  };

  const handleSelectOption = (optionId: number) => {
    if (!poll) return;

    switch (poll.pollType.id) {
      case PollTypes.Scale:
      case PollTypes.SingleChoice:
        setSelectedOptionIds([optionId]);
        break;

      case PollTypes.MultipleChoice:
        setSelectedOptionIds((previousIds) =>
          previousIds.includes(optionId)
            ? previousIds.filter((id) => id !== optionId)
            : [...previousIds, optionId]
        );
        break;
      default:
        break;
    }

    if (!confirmToVote) {
      handleVote([optionId]);
    }
  };

  useEffect(() => {
    setSelectedOptionIds(initialSelectedOptionIds);
  }, [initialSelectedOptionIds]);

  return {
    poll,
    selectedOptionIds,
    handleSelectOption,
    loading,
    voted,
    handleVote,
  };
};
