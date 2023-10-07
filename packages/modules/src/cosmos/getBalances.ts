import { CosmosSDKClient } from "@nancy/apis";
import {
  makeError,
  makeUnwrapablePromise,
  tryCatch,
  R,
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
      return R.fail(error);
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
      return R.fail(
        makeError(
          "FailedToParse",
          "Could not parse balances",
          {
            cause: parseError,
          },
        ),
      );
    }
    return R.ok({
      balances: parsedBalances,
      pagination: {
        nextKey: pagination?.next_key ?? null,
        total: pagination?.total,
      },
    });
  });
