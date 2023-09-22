import React from "react";
import { usePollz } from "../dist";
import { AddPoll } from "./components/add-poll";
import { PollsList } from "./components/polls-list";

export function App() {
  const Pollz = usePollz();

  return (
    <div>
      <h1>Polls</h1>
      {Pollz.initialized ? (
        <>
          <AddPoll />
          <PollsList />
        </>
      ) : null}
    </div>
  );
}
