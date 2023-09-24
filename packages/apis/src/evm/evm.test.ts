import {
  describe,
  expect,
  test,
} from "bun:test";
import { makeEVMClient } from "./index.ts";

describe("EVM Client", () => {
  const client =
    makeEVMClient(
      "https://eth.bd.evmos.org:8545"
    );
  test("eth_getBlockByNumber", async () => {
    const { result } =
      await client(
        "eth_getBlockByNumber",
        {
          params: [
            "latest",
            true,
          ],
        }
      );

    expect(
      result
    ).toBeDefined();
    expect(
      result?.hash
    ).toBeString();
  });

  test("eth_chainId", async () => {
    const { result } =
      await client(
        "eth_chainId",
        {
          params: [],
        }
      );

    expect(result).toBe(
      "0x2329"
    );
  });
});
