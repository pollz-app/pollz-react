import { PollTypes } from "pollz-js";
import { useEffect, useMemo, useState } from "react";
import { usePoll } from "../../../use-poll";
import { usePollz } from "../../../use-pollz";

export const hook = (
  pollId: number,
  userId: string,
  confirmToVote: boolean,
  withoutFeedback: boolean,
  onSubmitted?: (responses: number[]) => void
) => {
  const { sdk } = usePollz();
  const { poll } = usePoll(pollId, { listen: true });
  const [selectedOptionIds, setSelectedOptionIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [addingOption, setAddingOption] = useState(false);
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

      await sdk.polls.vote(poll.pollType.id, pollId, optionIds, userId);

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

  const handleAddOption = async (newOption: string) => {
    if (newOption.trim() !== "") {
      try {
        setAddingOption(true);
        await sdk.pollOptions(pollId).addOption(newOption.trim());
      } catch (error) {
        console.error("Error adding option:", error);
      } finally {
        setAddingOption(false);
      }
    }
  };

  const handleSelectOption = (optionId: number) => {
    if (!poll) return;

    switch (poll.pollType.id) {
      case PollTypes.SingleChoice:
        setSelectedOptionIds([optionId]);

        if (!confirmToVote) {
          handleVote([optionId]);
        }
        break;

      case PollTypes.MultipleChoice:
        setSelectedOptionIds((previousIds) => {
          const newIds = previousIds.includes(optionId)
            ? previousIds.filter((id) => id !== optionId)
            : [...previousIds, optionId];

          if (!confirmToVote) {
            handleVote(newIds);
          }
          return newIds;
        });
        break;
      default:
        break;
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
    handleAddOption,
    addingOption,
  };
};
