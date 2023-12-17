import { EntryIdType, OrderBy, PollWithOptions } from "pollz-js";
import React, { useCallback, useEffect } from "react";
import { usePollz } from "./use-pollz";

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
      const unsubscribe = sdk.polls.listen(pollId, setPoll);

      return () => {
        unsubscribe();
      };
    }
  }, [options?.listen, pollId]);

  return { poll, refetch: fetch };
};
