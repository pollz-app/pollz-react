import { PollWithOptions } from "pollz-js";
import React, { useCallback, useEffect } from "react";
import { usePollz } from "./use-pollz";

export const useAnonymousPoll = (pollToken: string) => {
  const { sdk } = usePollz();

  const [poll, setPoll] = React.useState<PollWithOptions | null>(null);

  const fetch = useCallback(() => {
    sdk.getAnonymousPoll(pollToken).then(setPoll);
  }, [pollToken]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { poll, refetch: fetch };
};
