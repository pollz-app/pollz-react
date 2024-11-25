import { Poll as PollType, PollWithOptions } from "pollz-js";
import React, { FC } from "react";
import { Poll } from "../../../../dist";

type Props = {
  poll: PollType;
  onUpdate: (poll: PollWithOptions) => void;
};

export const PollRow: FC<Props> = ({ poll: { id } }) => {
  return <Poll pollId={id} userId="EXAMPLE_USER_ID" />;
};
