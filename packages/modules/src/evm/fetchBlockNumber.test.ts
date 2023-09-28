import {
  describe,
  test,
  expect,
} from "bun:test";
import { fetchBlockNumber } from "./fetchBlockNumber.ts";
import { makeEVMClient } from "@nancy/apis";

describe("evm/fetchBlockNumber", () => {
  test("should fetch block number", async () => {
    const client =
      makeEVMClient(
        "https://eth.bd.evmos.org:8545",
      );

    const blockNumber =
      await fetchBlockNumber(
        client,
      ).unwrap();

    expect(
      blockNumber,
    ).toBeGreaterThan(0n);
  });
});
