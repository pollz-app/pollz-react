import { OrderBy, Poll } from "pollz-js";
import React, { useCallback, useEffect } from "react";
import { usePollz } from "./use-pollz";

export const usePolls = (orderBy?: OrderBy) => {
  const { sdk } = usePollz();

  const [polls, setPolls] = React.useState<Poll[]>([]);

  const fetch = useCallback(() => {
    sdk.getAll(orderBy).then(setPolls);
  }, [orderBy]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { polls, refetch: fetch };
};
