import { CosmosSDKClient } from "@nancy/apis";
import {
  makeError,
  makeUnwrapablePromise,
  tryCatch,
} from "@nancy/core";

export const fetchBalances = (
  cosmosSDKClient: CosmosSDKClient,
  {
    address,
    limit,
    paginationKey,
  }: {
    address: `${string}1${string}`;
    limit?: number;
    paginationKey?: string;
  },
) =>
  makeUnwrapablePromise(async () => {
    const [error, response] = await cosmosSDKClient(
      "GET /cosmos/bank/v1beta1/balances/{address}",
      {
        path: {
          address,
        },
        query: {
          "pagination.limit": limit?.toString(),
          "pagination.key": paginationKey,
        },
      },
    );

    if (error) {
      return [error, undefined] as const;
    }

    const { balances = [], pagination } = response;

    const [parseError, parsedBalances] = tryCatch(() =>
      balances.reduce(
        (
          acc: {
            denom: string;
            amount: bigint;
          }[],
          { denom, amount },
        ) => {
          if (!denom) return acc;

          return [
            ...acc,
            {
              denom,
              amount: BigInt(amount ?? 0),
            },
          ];
        },
        [],
      ),
    );

    if (parseError) {
      return [
        makeError(
          "FailedToParse",
          "Could not parse balances",
          {
            cause: parseError,
          },
        ),
        undefined,
      ] as const;
    }
    return [
      undefined,
      {
        balances: parsedBalances,
        pagination: {
          nextKey: pagination?.next_key ?? null,

          total: pagination?.total,
        },
      },
    ] as const;
  });
