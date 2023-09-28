import type { EVMClient } from "@nancy/apis";
import {
  makeUnwrapablePromise,
  makeError,
  tryCatch,
} from "@nancy/core";

export const fetchBlockNumber = (evmClient: EVMClient) =>
  makeUnwrapablePromise(async () => {
    const [error, block] = await evmClient(
      "eth_getBlockByNumber",
      {
        params: ["latest", false],
      },
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

    if (!block || !block.result?.number) {
      return [
        makeError("BlockNotFound", "Could not find block"),
        undefined,
      ] as const;
    }

    const blockNumber = block.result.number;

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
