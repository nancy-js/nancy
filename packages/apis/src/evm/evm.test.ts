// import { describe, expect, test } from "bun:test";
// import { makeEVMApiClient } from "./index.js";

// describe("EVM Client", () => {
//   const client = makeEVMApiClient(
//     "https://eth.bd.evmos.org:8545",
//   );
//   test("eth_getBlockByNumber", async () => {
//     const { result } = await client(
//       "eth_getBlockByNumber",
//       {
//         params: ["latest", true],
//       },
//     ).unwrap();

//     expect(result).toBeDefined();
//     expect(result?.hash).toBeString();
//   });

//   test("eth_chainId", async () => {
//     const { result } = await client("eth_chainId", {
//       params: [],
//     }).unwrap();

//     expect(result).toBe("0x2329");
//   });
// });
