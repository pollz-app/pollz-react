import React from "react";
import { createRoot } from "react-dom/client";
import { PollzProvider } from "../dist";
import { App } from "./App";
import { PollsStateProvider } from "./utils/state";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <PollzProvider
    appId="9973a8b9-ca11-451a-b035-c5ad9633fb06"
    appSecret="08fRrLjhM4frjILtO8ylBInPozQ="
  >
    <PollsStateProvider>
      <App />
    </PollsStateProvider>
  </PollzProvider>
);
