import { PollzSDK } from "pollz-js";
import { useContext } from "react";
import { PollzContext, Theme } from "./context";

export const usePollz = (): {
  sdk: PollzSDK;
  initialized: boolean;
  theme?: Theme;
} => {
  const value = useContext(PollzContext);

  if (value === undefined) {
    throw new Error("usePollz must be used within the PollzProvider.");
  }

  return value;
};
