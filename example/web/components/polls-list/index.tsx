import React from "react";
import { Poll, usePolls } from "../../../../dist";

export const PollsList = () => {
  const { polls } = usePolls();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 20,
      }}
    >
      {polls.items.map((poll) => (
        <div style={{ display: "flex" }}>
          <Poll pollId={poll.id} userId="EXAMPLE" />
        </div>
      ))}
    </div>
  );
};
