import type { EVMClient } from "@nancy/apis";
import {
  makeUnwrapablePromise,
  makeError,
  tryCatch,
  R,
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
      R.failWith(
        "FailedToFetch",
        "Could not fetch block number",
        { cause: error },
      );
    }

    if (!block || !block.result?.number) {
      return R.fail(
        makeError("BlockNotFound", "Could not find block"),
      );
    }

    const blockNumber = block.result.number;

    const [parseError, parsedBlockNumber] = await tryCatch(
      () => BigInt(blockNumber),
    );

    if (parseError) {
      return R.failWith(
        "FailedToParse",
        "Could not parse block number",
        {
          cause: parseError,
        },
      );
    }

    return R.ok(parsedBlockNumber);
  });
