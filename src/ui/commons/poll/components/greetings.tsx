import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
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
      <IoIosCheckmarkCircle
        size={50}
        color={overrideTheme?.colors.primary || theme.colors.primary}
      />
      <VotedText>{greetingsText}</VotedText>
    </VotedWrapper>
  );
};
