import {
  describe,
  test,
  expect,
} from "bun:test";
import { fetchBalances } from "./getBalances.ts";
import { makeCosmosSDKClient } from "@nancy/apis";

describe("cosmossdk/fetchBalances", () => {
  test("should fetch block number", async () => {
    const client =
      makeCosmosSDKClient(
        "https://rest.cosmos.directory/evmos",
      );

    const { balances } =
      await fetchBalances(
        client,
        {
          address:
            "evmos1gxykhk5uffcrc7mqppftfrcxumqm6gz0lh8t5k",
          limit: 1,
        },
      ).unwrap();

    expect(
      balances,
    ).toBeArray();
    expect(
      balances,
    ).not.toBeEmpty();
    balances.forEach(
      ({ denom, amount }) => {
        expect(
          denom,
        ).toBeString();
        expect(
          amount,
        ).toBeGreaterThanOrEqual(
          0n,
        );
      },
    );
  });
});
