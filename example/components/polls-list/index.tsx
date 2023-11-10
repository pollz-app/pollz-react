import { PollWithOptions } from "pollz-js";
import React, { useCallback } from "react";
import { usePolls } from "../../../dist";
import { usePollsState } from "../../utils/state";
import { PollRow } from "../poll-row";

export const PollsList = () => {
  const { updatePoll } = usePollsState();
  const { polls } = usePolls();

  const handleUpdate = useCallback(
    (poll: PollWithOptions) => {
      updatePoll(poll);
    },
    [updatePoll]
  );

  return (
    <ul>
      {polls.items.map((poll) => (
        <PollRow key={poll.id} onUpdate={handleUpdate} poll={poll} />
      ))}
    </ul>
  );
};
