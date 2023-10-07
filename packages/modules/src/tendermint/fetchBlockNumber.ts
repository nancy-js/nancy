import type { TendermintClient } from "@nancy/apis";
import {
  makeUnwrapablePromise,
  makeError,
  tryCatch,
  R,
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
      return R.fail(
        makeError(
          "FailedToFetch",
          "Could not fetch block number",
          { cause: error },
        ),
      );
    }
    const blockNumber = block.result?.block?.header?.height;
    if (!block || blockNumber === undefined) {
      return R.fail(
        makeError("BlockNotFound", "Could not find block"),
      );
    }

    const [parseError, parsedBlockNumber] = await tryCatch(
      () => BigInt(blockNumber),
    );

    if (parseError) {
      return R.fail(
        makeError(
          "FailedToParse",
          "Could not parse block number",
          {
            cause: parseError,
          },
        ),
      );
    }

    return R.ok(parsedBlockNumber);
  });
