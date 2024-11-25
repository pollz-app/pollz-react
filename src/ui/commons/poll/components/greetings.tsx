import Icon from "@expo/vector-icons/Ionicons";
import React from "react";
import { usePollz } from "../../../../use-pollz";
import { theme } from "../../../themes/base";
import { VotedText, VotedWrapper } from "../styles";

type Props = {
  greetingsText: string;
};

export const Greetings: React.FC<Props> = ({ greetingsText }) => {
  const { theme: overrideTheme } = usePollz();
  return (
    <VotedWrapper>
      <Icon
        name="checkmark-circle"
        size={50}
        color={overrideTheme?.colors.primary || theme.colors.primary}
      />
      <VotedText>{greetingsText}</VotedText>
    </VotedWrapper>
  );
};
