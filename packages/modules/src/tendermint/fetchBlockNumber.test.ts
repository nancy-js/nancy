import { describe, test, expect } from "bun:test";
import { fetchBlockNumber } from "./fetchBlockNumber.ts";
import { makeTendermintClient } from "@nancy/apis";

describe("tendermint/fetchBlockNumber", () => {
  test("should fetch block number", async () => {
    const client = makeTendermintClient(
      "https://rpc.cosmos.directory/evmos",
    );

    const blockNumber =
      await fetchBlockNumber(client).unwrap();

    expect(blockNumber).toBeGreaterThan(0n);
  });
});
