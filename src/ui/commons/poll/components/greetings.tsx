import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { theme } from "../../../themes/base";
import { VotedText, VotedWrapper } from "../styles";

type Props = {
  greetingsText: string;
};

export const Greetings: React.FC<Props> = ({ greetingsText }) => {
  return (
    <VotedWrapper>
      <IoIosCheckmarkCircle size={50} color={theme.colors.primary} />
      <VotedText>{greetingsText}</VotedText>
    </VotedWrapper>
  );
};
