import { EntryIdType, OrderBy, PollWithOptions } from "pollz-js";
import React, { useCallback, useEffect } from "react";
import { usePollz } from "./use-pollz";

/**
 * Fetches a poll by its id.
 * @param pollId The id of the poll.
 * @param options Options for the hook.
 * @returns The poll and a function to refetch it.
 * @example
 * const { poll, refetch } = usePoll("pollId", { listen: true, orderOptionsBy: OrderBy.Desc });
 */
export const usePoll = (
  pollId: EntryIdType,
  options?: { listen: boolean; orderOptionsBy?: OrderBy }
) => {
  const { sdk } = usePollz();

  const [poll, setPoll] = React.useState<PollWithOptions | null>(null);

  const fetch = useCallback(() => {
    sdk.polls.get(pollId, options?.orderOptionsBy).then(setPoll);
  }, [pollId, options?.orderOptionsBy]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    if (options?.listen) {
      const unsubscribe = sdk.polls.listen(
        pollId,
        setPoll,
        options?.orderOptionsBy
      );

      return () => {
        unsubscribe();
      };
    }
  }, [options, pollId]);

  return { poll, refetch: fetch };
};
