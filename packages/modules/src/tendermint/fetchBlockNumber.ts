import type { TendermintClient } from "@nancy/apis";
import {
  makeUnwrapablePromise,
  makeError,
  tryCatch,
} from "@nancy/core";

export const fetchBlockNumber = (
  tendermintClient: TendermintClient,
) =>
  makeUnwrapablePromise(async () => {
    const [error, block] = await tendermintClient(
      "GET /block",
      {},
    );

    if (error) {
      return [
        makeError(
          "FailedToFetch",
          "Could not fetch block number",
          { cause: error },
        ),
        undefined,
      ] as const;
    }
    const blockNumber = block.result?.block?.header?.height;
    if (!block || blockNumber === undefined) {
      return [
        makeError("BlockNotFound", "Could not find block"),
        undefined,
      ] as const;
    }

    const [parseError, parsedBlockNumber] = await tryCatch(
      () => BigInt(blockNumber),
    );

    if (parseError) {
      return [
        makeError(
          "FailedToParse",
          "Could not parse block number",
          {
            cause: parseError,
          },
        ),
        undefined,
      ] as const;
    }

    return [undefined, parsedBlockNumber] as const;
  });
