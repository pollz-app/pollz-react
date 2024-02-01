import { PollWithOptions } from "pollz-js";
import React, { useCallback, useEffect } from "react";
import { usePollz } from "./use-pollz";

/**
 * Fetches an anonymous poll by its token.
 * @param pollToken The token of the poll.
 * @returns The poll and a function to refetch it.
 * @example
 * const { poll, refetch } = useAnonymousPoll("pollToken");
 */
export const useAnonymousPoll = (pollToken: string) => {
  const { sdk } = usePollz();

  const [poll, setPoll] = React.useState<PollWithOptions | null>(null);

  const fetch = useCallback(() => {
    sdk.anonymous.getAnonymousPoll(pollToken).then(setPoll);
  }, [pollToken]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { poll, refetch: fetch };
};
