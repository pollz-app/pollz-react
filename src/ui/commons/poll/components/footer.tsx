import React from "react";
import { usePollz } from "../../../../use-pollz";
import { ActivityIndicator } from "../../../commons/activity-indicator";
import { VoteButton, VoteText } from "../styles";
import { Row } from "./styles";

type Props = {
  handleVote: () => Promise<void>;
  selectedOptionIds: number[];
  loading: boolean;
  confirmText: string;
};

export const Footer: React.FC<Props> = ({
  handleVote,
  selectedOptionIds,
  loading,
  confirmText,
}) => {
  const { theme } = usePollz();
  return (
    <VoteButton
      bg={theme?.colors.primary}
      onPress={() => handleVote()}
      disabled={!selectedOptionIds.length || loading}
    >
      <Row>
        <VoteText>{confirmText}</VoteText>
        {loading && <ActivityIndicator size={10} color={"white"} />}
      </Row>
    </VoteButton>
  );
};
