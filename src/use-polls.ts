import { OrderBy, PaginationMeta, Poll } from "pollz-js";
import React, { useCallback, useEffect } from "react";
import { usePollz } from "./use-pollz";

export const usePolls = (
  page?: number,
  itemsPerPage?: number,
  orderBy?: OrderBy
) => {
  const { sdk } = usePollz();

  const [polls, setPolls] = React.useState<{
    items: Poll[];
    meta: PaginationMeta | undefined;
  }>({
    items: [],
    meta: undefined,
  });

  const fetch = useCallback(() => {
    sdk.getAll(page, itemsPerPage, orderBy).then(setPolls);
  }, [page, itemsPerPage, orderBy]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { polls, refetch: fetch };
};
