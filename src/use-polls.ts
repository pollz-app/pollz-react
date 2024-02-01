import { OrderBy, PaginationMeta, Poll } from "pollz-js";
import React, { useCallback, useEffect } from "react";
import { usePollz } from "./use-pollz";

/**
 * Fetches all polls.
 * @param page The page to fetch.
 * @param itemsPerPage The number of items per page.
 * @param orderBy The order of the items.
 * @returns The polls and a function to refetch them.
 * @example
 * const { polls, refetch } = usePolls(1, 10, OrderBy.Desc);
 */
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
    sdk.polls.getAll(page, itemsPerPage, orderBy).then(setPolls);
  }, [page, itemsPerPage, orderBy]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { polls, refetch: fetch };
};
