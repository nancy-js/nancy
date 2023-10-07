import { describe, test, expect } from "bun:test";
import { fetchBlockNumber } from "./fetchBlockNumber.ts";
import { makeEVMApiClient } from "@nancy/apis";

describe("evm/fetchBlockNumber", () => {
  test("should fetch block number", async () => {
    const client = makeEVMApiClient(
      "https://eth.bd.evmos.org:8545"
    );

    const blockNumber = await fetchBlockNumber(
      client
    ).unwrap();

    expect(blockNumber).toBeGreaterThan(0n);
  });
});
