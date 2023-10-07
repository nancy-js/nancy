// import evmos from "@nancy/registry/gen/chains/mainnet/evmos.ts";
// import cosmoshub from "@nancy/registry/gen/chains/mainnet/cosmoshub.ts";

// import { describe, expect, it } from "bun:test";
// import { createEVMClient } from "./createEVMClient.ts";
// const config = {
//   chains: {
//     evmos,
//     cosmoshub: () =>
//       import(
//         "@nancy/registry/gen/chains/mainnet/cosmoshub.ts"
//       ),
//   },
// } as const;

// describe("createEVMClient", () => {
//   it("works", async () => {
//     const evmosClient = createEVMClient(config, "evmos");

//     const response = await evmosClient
//       .send("eth_blockNumber", [])
//       .unwrap();

//     expect(parseInt(response.result)).toBeGreaterThan(0);
//   });
// });
