import { PollType } from "pollz-js";
import React, { useEffect } from "react";
import { usePollz } from "./use-pollz";

/**
 * Fetches all poll types.
 */
export const usePollTypes = () => {
  const { sdk } = usePollz();

  const [pollTypes, setPollTypes] = React.useState<PollType[] | null>(null);

  const fetch = React.useCallback(() => {
    sdk.pollTypes.getAll().then(setPollTypes);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { polls: pollTypes };
};
